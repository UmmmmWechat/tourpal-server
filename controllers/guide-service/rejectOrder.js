var fn = async (ctx, next) => {
    const body = ctx.request.body
    let orderId = body.orderId

    if (!orderId) {
        await next()
    } else {
        ctx.body = orderId
    }

}

module.exports = {
    // orderId
    'POST /orders/reject': fn
}