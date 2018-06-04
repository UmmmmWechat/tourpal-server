const CommonController = require('../CommonController')
var fn =  function (res) {
    return new Promise((onSuccess, onError) => {
        setTimeout(() => onError(res), 1000)
    })
}
// var fn = async function (onSuccess, onError) {
//     await setTimeout(() => onSuccess('dkdkdkd'))
// }
var index_fn = async (ctx, next) => {
    var obj = {a: 'a'} 
    await CommonController(
        ctx,
        next,
        obj,
        () => fn('kdkdkd')
    )
}
// 这个Index可以用来获取 openId
module.exports = {
    'GET /index': index_fn
}