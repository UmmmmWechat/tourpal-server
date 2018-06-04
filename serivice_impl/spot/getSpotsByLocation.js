const spotDAO = require('../../dao/spot/spot')
const SpotSortBy = require('./SpotSort')
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = require('./SpotConst').PAGE_SIZE
const ResultMessage = require('../../utils/ResultMessage')

module.exports = async function (location, lastIndex) {
    let result
        let key = 'spot' + location.province + location.city + location.region
        await CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            SpotSortBy,
            (res) => {
                result = res
            },
            () => spotDAO.findByProvinceAndCity(location.province, location.city)
        )
    return result
    
}