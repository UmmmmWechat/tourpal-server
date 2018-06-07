const config = require('../../config')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const FormDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/message/message`)
const ResultMessage = require('../../utils/ResultMessage')
const FormItem = require('../../entity/Message')

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
        let insertResult = await OrderDAO.insert(order)
        let orderId = insertResult.insertId
        let form = new FormItem()
        form.formId = formId
        form.orderId = insertId
        form.createdDate = new Date().toDateString()
        await FormDAO.insert(form)

        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}