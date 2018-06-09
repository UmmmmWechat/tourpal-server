const config = require('../../config')
const orderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const Order = require('../../entity/Order')
const OrderState = require('../../utils/OrderState')
const ResultMessage = require('../../utils/ResultMessage')
const Cache = require('../../utils/cache')
// 参数为 {int} orderId, {String} cancelMessage
module.exports = async function (orderId) {
    let order = undefined;
    try {
        // 获取
        let res = await orderDAO.findById(orderId)
        res = res[0]
        if (res === undefined) {
            throw new Error(ResultMessage.NOT_FOUND)
        } else {
            order = res
        }
        // 检查是否已经被 guide处理了
        if (order.state === OrderState.ONGOING) {
            throw new Error(ResultMessage.ALREADY_ACCEPTED)
        } else if (order.state === OrderState.REJECTED) {
            throw new Error(ResultMessage.ALREADY_REJECTED)
        }
        // 改变状态
        order.state = OrderState.CANCELED
        // 更新数据库
        await orderDAO.update(order)
        // 清除cache
        let key = 'order' + order.touristId + OrderState.WAITING
        Cache.removeResource(key)
        key = 'order' + order.guideId + OrderState.WAITING
        Cache.removeResource(key)
        // 返回成功
        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}