const GetSpotById = require('../../serivice_impl/spot/GetSpotById')
const CommonController = require('../CommonController')
// /spot?id=1
var fn = async (ctx, next) => {
    const query = ctx.query
    let id = query.id
    await CommonCotroller(
        ctx,
        next,
        {
            'id': id
        },
        () => GetSpotById(id)
    )
    console.log(new Date().toLocaleTimeString())
    console.log('over')
}

module.exports = {
    'GET /spots/by-id': fn
}