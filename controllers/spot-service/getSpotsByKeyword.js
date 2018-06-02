// querySpots(string keyword, int lastIndex);
var fn = async (ctx, next) => {
    let keyword = ctx.query.keyword
    let lastIndex = ctx.query.lastIndex || 0

    if (!keyword) {
        await next()
    }

    ctx.body = [{key:keyword}]
}

module.exports = {
    'GET /spots/by-keyword': fn
}