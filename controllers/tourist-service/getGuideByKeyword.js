/* 
* @param {int} spotId 景点ID
* @param {int} lastIndex
*/
// /spot?keyword=&lastIndex=
var fn = async (ctx, next) => {
    let keyword = ctx.query.keyword
    let lastIndex = ctx.query.lastIndex || 0
    if (!keyword) {
        await next()
    } else {
        ctx.body = keyword
    }
}

module.exports = {
    'GET /guides/by-keyword': fn
}