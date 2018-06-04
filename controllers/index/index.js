const CommonController = require('../CommonController')
const OpenId = require('../../serivice_impl/tencent/OpenId')
// var fn = async function (onSuccess, onError) {
//     await setTimeout(() => onSuccess('dkdkdkd'))
// }
var index_fn = async (ctx, next) => {
    let code = ctx.query.code
    await CommonController(
        ctx,
        next,
        {
            code: code
        },
        () => OpenId(code)
    )
}
// 这个Index可以用来获取 openId
module.exports = {
    'GET /index': index_fn
}