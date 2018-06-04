const spotDAO = require('../../dao/spot/spot')
const SpotSortBy = require('./SpotSort')
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = require('./SpotConst').PAGE_SIZE
const ResultMessage = require('../../utils/ResultMessage')

module.exports = async function (location, lastIndex) {
    return new Promise((resolve, reject) => {
        let key = 'spot' + location.province + location.city + location.region
        CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            SpotSortBy,
            (res) => {
                resolve(res)
            },
            () => spotDAO.findByProvinceAndCity(location.province, location.city)
            // (callback) => {
            //     spotDAO.findByProvinceAndCity(
            //         location.province,
            //         location.city
            //     )
            //     .then(res => {
            //       if (res.length === 0) {
            //           resolve(res)
            //       } else {
            //           callback(res)
            //       }
            //     })
            //     .catch(err => {
            //         reject(ResultMessage.ERROR_DATABASE)
            //     })
            // }
        )
    })
    
}