const GetSpotById = require('../../serivice_impl/spot/GetSpotById')
const CommonController = require('../CommonController')
//
var fn = async (ctx, next) => {
    const query = ctx.query
    let spotId = query.spotId
    await CommonController(
        ctx,
        next,
        {
            'spotId': spotId
        },
        () => GetSpotById(spotId)
    )
}

module.exports = {
    'GET /spots/by-id': fn
}