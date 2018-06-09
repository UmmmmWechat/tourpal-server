const CommonCotroller = require('../CommonController')
const CancelOrder = require('../../serivice_impl/tourist/CancelOrderById')
var fn = async (ctx, next) => {
    const body = ctx.request.body
    let orderId = body.orderId
    orderId = parseInt(orderId)
   await CommonCotroller(
       ctx,
       next,
       {
           orderId: orderId,
       },
       () => CancelOrder(orderId)
   )
}

module.exports = {
    // 参数为 {int} orderId, {String} cancelMessage
    'POST /orders/cancel': fn
}