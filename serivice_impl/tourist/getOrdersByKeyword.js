/* 
* @param {int} touristId 游客id
* @param {} keyword
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let touristId = ctx.query.touristId
    let lastIndex = ctx.query.lastIndex
    let keyword = ctx.query.keyword
    if (!keyword) {
        await next()
    } else {
        ctx.body = keyword
    }
}

module.exports = {
    'GET /orders/for-tourist/by-keyword': fn
}