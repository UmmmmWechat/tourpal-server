const OrderDAO = require('../../dao/order/order')
const GuideDAO = require('../../dao/guide/guide')
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
    return new Promise((resolve, reject) => {
        OrderDAO.insert(order)
        .then(() => {
            // 这里新建了成功就行了，
            // 发送通知那个可以后台慢慢去做，和本次流程的关系不大
            // 不必等着
            resolve()
            return NoticeGuide.noticeNewInvitation(order.guideId)
        })
        .then((res) => {
            console.log(`发送新邀请通知给 ${order.guideId} 成功`)
        })
    })
}