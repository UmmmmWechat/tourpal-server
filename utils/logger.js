module.exports = async (ctx, next) => {
    console.log('-------------------------------------')
    console.log('At ' + new Date().toLocaleTimeString())
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    console.log('body:')
    console.log(ctx.request.body)
    console.log('query:')
    console.log(ctx.request.query)
    console.log('params:')
    console.log(ctx.params)
    await next();
}
