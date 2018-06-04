const CommonController = require('../CommonController')
// 
var fn = async (ctx, next) => {
    let guideId = ctx.query.guideId
    CommonController(
        ctx,
        next,
        {
            guideId: guideId
        },
        () => ''
    )
}

module.exports = {
    // {String} guideId
    'GET /guides/info': fn
}