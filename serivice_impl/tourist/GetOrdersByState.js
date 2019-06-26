const config = require('../../config')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = 10
const ResultMessage = require('../../utils/ResultMessage')

/**
* 
* 
* @param {int} touristId 游客id
* @param {} state 状态
* @param {int} lastIndex
*/
module.exports = async function (touristId, state, lastIndex) {
    let result
        let key = 'order_tourist' + touristId + state
        await CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            undefined,
            (res) => {  // res是查到的数据
                result = res
            },
            () => OrderDAO.findByTouristIdAndState(touristId, state)
        )
    return result
}