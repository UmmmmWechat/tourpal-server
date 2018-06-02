/* 
* @param {int} guideId id
* @param {} keyword
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let guideId = ctx.query.guideId
    let lastIndex = ctx.query.lastIndex
    let keyword = ctx.query.keyword
    if (!keyword) {
        await next()
    } else {
        ctx.body = keyword
    }
}

module.exports = {
    'GET /orders/for-guide/by-keyword': fn
}