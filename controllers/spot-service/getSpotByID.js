const GetSpotById = require('../../serivice_impl/spot/GetSpotById')
const CommonController = require('../CommonController')
// /spot?id=1
var fn = async (ctx, next) => {
    const query = ctx.query
    let id = query.id
    CommonController(
        ctx,
        next,
        {
            'id': id
        },
        (onError) => {
            GetSpotById(id)
            .then(res => {
                ctx.body = res
            })
            .catch(err => {
                onError(err)
            })
        }
    )
    // if (!id) {
    //     await next()
    //     ctx.response.status = 400
    //     ctx.response.message = '缺少id参数'
    // } else {
    //     GetSpotById(id)
    //     .then(res => {
    //         ctx.body = res
    //     })
    //     .catch(err => {
    //         ctx.response.status = 500
    //         ctx.response.message = err
    //     })
        
    // }
}

module.exports = {
    'GET /spots/by-id': fn
}