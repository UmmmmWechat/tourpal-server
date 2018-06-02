// boolean queryIfNew(String code);
var fn = async (ctx, next) => {
    let code = ctx.query.code
    if (!code) {
        await next()
    } else {
        ctx.body = code
    }
}

module.exports = {
    // {String} code
    'GET /guides/if-new': fn
}