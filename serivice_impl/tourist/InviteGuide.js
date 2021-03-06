const config = require('../../config')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const FormDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/message/message`)
const ResultMessage = require('../../utils/ResultMessage')
const OrderState = require('../../utils/OrderState')
const FormItem = require('../../entity/Message')
const Cache = require('../../utils/cache')

// 邀请某位导游
/**
 * public class Order {
    public int touristId;

    public int guideId;

    public int spotId;

    public Date generatedDate;

    public Date travelDate;

    public String message;
}
*/
/**
 * 其实是一个新建order的操作
 * 由于后面需要通知结果， 所以多了步 保存formId的操作
 */
module.exports = async function (order, formId) {
    try {
        order.state = OrderState.WAITING
        // 要转成 Date()对象才能存入数据库
        order.travelDate = new Date(order.travelDate)
        order.generatedDate = new Date(order.generatedDate)
        let insertResult = await OrderDAO.insert(order)
        let orderId = insertResult.insertId
        let form = new FormItem()
        form.formId = formId
        form.orderId = orderId
        form.createdDate = new Date()
        await FormDAO.insert(form)

        let key = 'order_tourist' + order.touristId + order.state
        // 移除cache因为已经更新了
        Cache.removeResource(key)
        key = 'order_guide' + order.guideId + order.state
        Cache.removeResource(key)

        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}