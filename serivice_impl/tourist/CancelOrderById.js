const orderDAO = require('../../dao/order/order')
const Order = require('../../entity/Order')
const OrderState = require('../../utils/OrderState')
const ResultMessage = require('../../utils/ResultMessage')
// 参数为 {int} orderId, {String} cancelMessage
module.exports = async function (orderId, cancelMessage) {
    let order = undefined;
    order = new Order()
    try {
        // 获取
        let res = await orderDAO.findById(orderId)
        res = res[0]
        if (res === undefined) {
            throw new Error(ResultMessage.NOT_FOUND)
        } else {
            Object.assign(order, res)
        }
        // 改变状态
        order.state = OrderState.CANCELED
        // 更新数据库
        await orderDAO.update(order)
        // 返回成功
        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}