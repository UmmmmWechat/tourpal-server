
var index_fn = async (ctx, next) => {
   ctx.body = 'Hell World!'
}
// 这个Index可以用来获取 openId
module.exports = {
    'GET /index': index_fn
}