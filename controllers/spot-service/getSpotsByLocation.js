const GetSpotsByLocation = require('../../serivice_impl/spot/GetSpotsByLocation')
const CommonCotroller = require('../CommonController')
// querySpots(Location location, int lastIndex);
var fn = async (ctx, next) => {
    let location = ctx.query.location
    let lastIndex = ctx.query.lastIndex

    await CommonCotroller(
        ctx,
        next,
        {
            location: location,
            lastIndex: lastIndex
        },
        () => GetSpotsByLocation(location, lastIndex)
    )
    console.log('get spots by location over')
}

module.exports = {
    'GET /spots/by-location': fn
}