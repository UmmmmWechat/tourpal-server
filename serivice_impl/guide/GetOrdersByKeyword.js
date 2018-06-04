// const OrderDAO = require('../../dao/order/order')
const config = require('../../config')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = 10
const ResultMessage = require('../../utils/ResultMessage')

/**
 * 
 * @param {int} guideId 
 * @param {} keyword
 * @param {int} lastIndex
 */
module.exports = async function (guideId, keyword, lastIndex) {
    let result
    let key = 'order' + guideId + keyword
    await CommonGetByCache(
        key,
        lastIndex,
        lastIndex + PAGE_SIZE,
        undefined,
        (res) => { // res是查到的数据
            result = res
        },
        () => OrderDAO.findByGuideIdAndKeyword(guideId, keyword)
    )
    return result
}