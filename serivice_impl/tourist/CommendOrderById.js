/*
    private int id;

    private int spotPoint;

    private int guidePoint;

    private String comment;
*/
const Order = require('../../entity/Order')
const OrderDao = require('../../dao/order/order')
const ResultMessage = require('../../utils/ResultMessage')

// 参数为 {int} orderId, {Feedback} feedback
module.exports = async function (orderId, feedback) {
    let order = new Order()
    try {
        // 查出来 
        let res = await OrderDao.findById(orderId)
        res = res[0]
        if (res) {
            Object.assign(order, res)
        } else {
            throw new Error(ResultMessage.NOT_FOUND)
        }
        // 加上feedback
        order.feedback = feedback
        // 更新
        await OrderDao.update(order)
        // 成功
        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}