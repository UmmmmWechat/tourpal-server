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

    await CommonController (
        ctx,
        next,
        {
            order: order
        },
        () => InviteGuide(order)
    )
}

module.exports = {
    // 参数为 order {Object}
    'POST /orders/new': fn
}