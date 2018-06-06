const config = require('../../config')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = 10
const ResultMessage = require('../../utils/ResultMessage')

/**
* 
* @param {int} touristId 游客id
* @param {} keyword
* @param {int} lastIndex
*/
module.exports = async function (touristId, keyword, lastIndex) {
    let result
        let key = 'order' + touristId + keyword
        await CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            undefined,
            (res) => {  // res是查到的数据
                result = res
            },
            () => OrderDAO.findByTouristAndKeyword(touristId, keyword)
        )
        return result
}