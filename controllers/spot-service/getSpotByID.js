// /spot?id=1
var fn = async (ctx, next) => {
    const query = ctx.query
    let id = query.id
    if (!id) {
        await next()
    } else {
        ctx.body = id
    }
}

module.exports = {
    'GET /spots/by-id': fn
}