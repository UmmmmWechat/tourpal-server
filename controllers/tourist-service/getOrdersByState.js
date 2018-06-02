/* 
* @param {int} touristId 游客id
* @param {} state 状态
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let touristId = ctx.query.touristId
    let lastIndex = ctx.query.lastIndex
    let state = ctx.query.state
    if (!state) {
        await next()
    } else {
        ctx.body = state
    }
}

module.exports = {
    'GET /orders/for-tourist/by-state': fn
}