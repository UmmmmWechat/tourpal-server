const CommonController = require('../CommonController')
const AcceptOrder = require('../../serivice_impl/guide/AcceptOrRejectOrder').acceptOrder

var fn = async (ctx, next) => {
    const body = ctx.request.body
    let orderId = body.orderId
    orderId = parseInt(orderId)

    await CommonController(
        ctx,
        next,
        {
            orderId: orderId
        },
        () => AcceptOrder(orderId)
    )
    
}

module.exports = {
    // orderId
    'POST /orders/accept': fn
}