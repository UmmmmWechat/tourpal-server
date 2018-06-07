const CommonController = require('../CommonController')
const InviteGuide = require('../../serivice_impl/tourist/InviteGuide')
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
var fn = async (ctx, next) => {
    const body = ctx.request.body
    let order = body.order
    order = JSON.parse(order)
    let formId = body.formId

    await CommonController (
        ctx,
        next,
        {
            order: order,
            formId: formId
        },
        () => InviteGuide(order, formId)
    )
}

module.exports = {
    // 参数为 order {Object}
    'POST /orders/new': fn
}