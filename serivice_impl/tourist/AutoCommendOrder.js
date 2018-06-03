const Feedback = require('../../entity/Feedback')
/**
 * 自动评价某一订单
 */
module.exports = function (order) {
    let autoFeedback = new Feedback()
    autoFeedback.comment = '系统自动评价'
    autoFeedback.guidePoint = 5
    autoFeedback.spotPoint = 5
    order.feedback = autoFeedback
    return order
}