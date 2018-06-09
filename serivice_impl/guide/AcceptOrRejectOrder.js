const config = require('../../config')
const OrderState = require('../../utils/OrderState')
// const OrderDAO = require('../../dao/order/order')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const NoticeTourist = require('../notice/NoticeTourist')
const ResultMessage = require('../../utils/ResultMessage')
const Cache = require('../../utils/cache')

/**
 * TODO: 结果通知
 * 主要处理程序
 * @param {*} orderId 
 * @param {*} state 
 */
var stateOrder = async (orderId, state) => {
    let order = undefined;
    // 即将变成的状态只能是下面两种
    if (state !== OrderState.REJECTED &&
        state !== OrderState.ONGOING) {
        throw new Error(ResultMessage.INVALID_PARAM + ':' + state)
    }
    try {
        // 先获取，等待
        let res = await OrderDAO.findById(orderId)
        console.log('in state order',res)
        order = res[0]
        if (!order) {
            throw new Error(ResultMessage.NOT_FOUND)
        }
        // 检查是否被 tourist 取消了
        if (order.state === OrderState.CANCELED) {
            throw new Error(ResultMessage.ALREADY_CANCELED)
        }
        // 更新
        order.state = state
        await OrderDAO.update(order)
        NoticeTourist.noticeInvitationResult(order)
    } catch (err) {
        throw err
    }
    console.log(new Date().toLocaleTimeString())
    console.log('state order:' + state + ' over')
    let key = 'order' + order.touristId + order.state
    Cache.removeResource(key)
    let key = 'order' + order.guideId + order.state
    Cache.removeResource(key)
    return ResultMessage.SUCCESS
}

// 通过，为了规范写成了接口供调用
var acceptOrder = async (orderId) => {
    return await stateOrder(orderId, OrderState.ONGOING)
}

var rejectOrder = async (orderId) => {
    return await stateOrder(orderId, OrderState.REJECTED)
}

module.exports = {
    acceptOrder,
    rejectOrder
}