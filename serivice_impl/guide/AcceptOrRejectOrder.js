const config = require('../../config')
const OrderState = require('../../utils/OrderState')
// const OrderDAO = require('../../dao/order/order')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const NoticeTourist = require('../notice/NoticeTourist')
const ResultMessage = require('../../utils/ResultMessage')

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
        order = res[0]
        if (!order) {
            throw new Error(ResultMessage.ERROR_DATABASE)
        }
        // 更新
        order.state = state
        await OrderDAO.update(order)
        NoticeTourist.noticeInviteResult(order)
    } catch (err) {
        throw err
    }
    console.log(new Date().toLocaleTimeString())
    console.log('state order:' + state + ' over')
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