var fn = async (ctx, next) => {
    const body = ctx.request.body
    let code = body.code

    if (!code) {
        await next()
    } else {
        ctx.body = code
    }

}

module.exports = {
    'POST /login/guide': fn
}