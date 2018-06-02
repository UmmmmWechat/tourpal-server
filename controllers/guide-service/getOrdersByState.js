/* 
* @param {int} guideId 导游
* @param {} state 状态
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let guideId = ctx.query.guideId
    let lastIndex = ctx.query.lastIndex
    let state = ctx.query.state
    if (!state) {
        await next()
    } else {
        ctx.body = state
    }
}

module.exports = {
    'GET /orders/for-guide/by-state': fn
}