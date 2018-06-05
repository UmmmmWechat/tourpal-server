const CommonController = require('../CommonController')
const OpenId = require('../../serivice_impl/tencent/OpenId')
// var fn = async function (onSuccess, onError) {
//     await setTimeout(() => onSuccess('dkdkdkd'))
// }
var index_fn = async (ctx, next) => {
    ctx.body = ctx.request.body
}
// 这个Index可以用来获取 openId
module.exports = {
    'POST /index': index_fn
}