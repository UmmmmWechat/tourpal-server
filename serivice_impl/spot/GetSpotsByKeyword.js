const config = require('../../config')
const spotDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/spot/spot`)
const SpotSortBy = require('./SpotSort')
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = require('./SpotConst').PAGE_SIZE
const ResultMessage = require('../../utils/ResultMessage')


module.exports = async function (keyword, lastIndex) {

    let result
        let key = 'spot' + keyword
        await CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            SpotSortBy,
            (res) => {  // res是查到的数据
                result = res
            },
            () => spotDAO.findByKeyword(keyword)
        )
        return result
}