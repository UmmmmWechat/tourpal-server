var fn = async (ctx, next) => {
    const body = ctx.request.body
    let orderId = body.orderId
    let cancelMessage = body.cancelMessage
    if (!orderId) {
        await next()
    } else {
        ctx.body = JSON.stringify(body)
    }
}

module.exports = {
    // 参数为 {int} orderId, {String} cancelMessage
    'POST /orders/cancel': fn
}