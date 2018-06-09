const CommonController = require('../CommonController')
const GetGuideById = require('../../serivice_impl/guide/GetInfo')
// 
var fn = async (ctx, next) => {
    let guideId = ctx.query.guideId
    guideId = parseInt(guideId)
    await CommonController(
        ctx,
        next,
        {
            guideId: guideId
        },
        () => GetGuideById(guideId)
    )
}

module.exports = {
    // {String} guideId
    'GET /guides/info': fn
}