const OrderDAO = require('../../dao/order/order')
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
module.exports = function (touristId, state, lastIndex) {
    return new Promise((resolve, reject) => {
        let key = 'order' + touristId + state
        CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            undefined,
            (res) => {  // res是查到的数据
                resolve(res)
            },
            callback => { // cache中不存在资源
                OrderDAO.findByTouristIdAndState(touristId, state)
                .then(res => {
                    if (res.length === 0) { // 如果查询结果为空，直接返回了，不要存在cache了
                        resolve(res)
                    } else {
                        // 将数据传回去在那边做 进入 cache的操作， 完成后那边会 调成功
                        callback(res)
                    } 
                })
                .catch(err => { // 数据层数据出错
                    console.log(err)
                    reject(ResultMessage.ERROR_DATABASE)
                })
            }
        )
    })
}