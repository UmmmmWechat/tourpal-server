/*
    private int id;

    private int spotPoint;

    private int guidePoint;

    private String comment;
*/
var fn = async (ctx, next) => {
    const body = ctx.request.body
    let orderId = body.orderId
    let feedback = body.feedback
    if (!orderId || !feedback) {
        await next()
    } else {
        feedback = JSON.parse(feedback)
        ctx.body = JSON.stringify(body)
    }
}

module.exports = {
    // 参数为 {int} orderId, {Feedback} feedback
    'POST /orders/commend': fn
}