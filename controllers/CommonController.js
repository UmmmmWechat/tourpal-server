/**
 * 共同的controller 框架
 * @param {*} ctx 
 * @param {*} next 
 * @param {*} params 所有参数构成的object 
 * @param {*} operation 常规操作
 */
module.exports = async function (ctx, next, params, operation) {
    var onSuccess = function (res) {
        console.log('on success')
        ctx.response.status = 200
        ctx.response.body = res
    }
    var onError = function (err) {
        console.log('on error', err)
        ctx.response.status = 500
        ctx.response.body = err
    }
    // 检查参数
    for (let key in params) {
        if (!params[key]) {
            await next()
            ctx.response.status = 400
            ctx.response.body = `Param ${key} is required!`
        }
    }
    // 没有参数错误
    try {
        let result = await operation()
        if (result) {
            onSuccess(result)
        } else {
            onError('NOT_FOUND')
        }
    } catch (err) {
        onError(err)
    }
    console.log('common controller over')
    console.log(new Date().toLocaleTimeString())
}