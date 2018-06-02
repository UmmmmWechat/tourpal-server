/* 
* @param {int} spotId 景点ID
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let spotId = ctx.query.spotId
    let lastIndex = ctx.query.lastIndex
    if (!spotId) {
        await next()
    } else {
        ctx.body = spotId
    }
}

module.exports = {
    'GET /guides/by-spot-id': fn
}