const CommonController = require('../CommonController')
const Login = require('../../serivice_impl/tourist/Login')
var fn = async (ctx, next) => {
    const body = ctx.request.body
    let code = body.code

    await CommonController(
        ctx,
        next,
        {
            code: code
        },
        () => Login(code)
    )
}

module.exports = {
    'POST /login/tourist': fn
}