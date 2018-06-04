const OrderDAO = require('../../dao/order/order')
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = 10
const ResultMessage = require('../../utils/ResultMessage')

/**
* 
* @param {int} guideId 
* @param {} state
* @param {int} lastIndex
*/
module.exports = function (guideId, state, lastIndex) {
    return new Promise((resolve, reject) => {
        let key = 'order' + guideId + state
        CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            undefined,
            (res) => {  // res是查到的数据
                resolve(res)
            },
            () => OrderDAO.findByGuideIdAndState(guideId, state)
            // callback => { // cache中不存在资源
            //     OrderDAO.findByGuideIdAndState(guideId, state)
            //     .then(res => {
            //         if (res.length === 0) { // 如果查询结果为空，直接返回了，不要存在cache了
            //             resolve(res)
            //         } else {
            //             // 将数据传回去在那边做 进入 cache的操作， 完成后那边会 调成功
            //             callback(res)
            //         } 
            //     })
            //     .catch(err => { // 数据层数据出错
            //         console.log(err)
            //         reject(ResultMessage.ERROR_DATABASE)
            //     })
            // }
        )
    })
}