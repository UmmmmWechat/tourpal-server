const CommonCotroller = require('../CommonController')
const CommendOrder = require('../../serivice_impl/tourist/CommendOrderById')
var fn = async (ctx, next) => {
    const body = ctx.request.body
    let orderId = body.orderId
    orderId = parseInt(orderId)
    let feedback = body.feedback
    feedback = JSON.parse(feedback)
    CommonCotroller(
       ctx,
       next,
       {
           orderId: orderId,
           feedback: feedback
       },
       () => CommendOrder(orderId, feedback)
   )
}

module.exports = {
    // 参数为 {int} orderId, {Feedback} feedback
    'POST /orders/commend': fn
}