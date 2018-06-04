const config = require('../../config')
const OrderDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
const ResultMessage = require('../../utils/ResultMessage')
const NoticeGuide = require('../notice/NoticeGuide')

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
        // 这里新建了成功就行了，
        // 发送通知那个可以后台慢慢去做，和本次流程的关系不大
        // 不必等着
        NoticeGuide.noticeNewInvitation(order.guideId) // 这个发送通知的，后台慢慢做吧
        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}