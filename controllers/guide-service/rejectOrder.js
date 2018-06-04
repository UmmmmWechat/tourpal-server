const CommonController = require('../CommonController')
const RejectOrder = require('../../serivice_impl/guide/AcceptOrRejectOrder').rejectOrder

var fn = async (ctx, next) => {
    const body = ctx.request.body
    let orderId = body.orderId

    await CommonController(
        ctx,
        next,
        {
            orderId: orderId
        },
        () => RejectOrder(orderId)
    )
    
}

module.exports = {
    // orderId
    'POST /orders/reject': fn
}