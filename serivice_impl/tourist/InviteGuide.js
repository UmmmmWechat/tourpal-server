const config = require('../../config')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
const ResultMessage = require('../../utils/ResultMessage')

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
 * TODO: 向guide发送通知
 */
module.exports = async function (order) {
    try {
        await OrderDAO.insert(order)
        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}