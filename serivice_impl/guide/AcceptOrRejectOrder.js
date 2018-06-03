const OrderState = require('../../utils/OrderState')
const OrderDAO = require('../../dao/order/order')
const NoticeTourist = require('../notice/NoticeTourist')
const ResultMessage = require('../../utils/ResultMessage')

/**
 * TODO: 结果通知
 * 主要处理程序
 * @param {*} orderId 
 * @param {*} state 
 */
var stateOrder = async (orderId, state) => {
    return new Promise( async (resolve, reject) => {
        let order = undefined;
        // 即将变成的状态只能是下面两种
        if (state !== OrderState.REJECTED 
            || state !== OrderState.ONGOING) {
                reject(ResultMessage.INVALID_PARAM + ':' + state)
            }
        await OrderDAO.findById(orderId)
        .then(res => {
            order = res[0]
            if (order) {
                order.state = state
                return OrderDAO.update(order)
            } else {
                reject(ResultMessage.NOT_FOUND)
            }
        })
        .then(() => { // 数据库更新成功
            resolve()
            // 后面慢慢去通知吧，我先回复说邀请发送成功啦
            NoticeTourist.noticeInviteResult(order)
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
        
    })
}

// 通过，为了规范写成了接口供调用
var acceptOrder = (orderId) => {
    return stateOrder(orderId, OrderState.ONGOING)
}

var rejectOrder = (orderId) => {
    return stateOrder(orderId, OrderState.REJECTED)
}

module.exports = {
    acceptOrder,
    rejectOrder
}