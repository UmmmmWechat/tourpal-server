const CommonCotroller = require('../CommonController')
const GetGuidesBySpotId = require('../../serivice_impl/tourist/GetGuidesBySpotId')
/* 
* @param {int} spotId 景点ID
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let spotId = ctx.query.spotId
    spotId = parseInt(spotId)
    let lastIndex = ctx.query.lastIndex
    lastIndex = parseInt(lastIndex)
    await CommonCotroller(
        ctx,
        next,
        {
            'spotId': spotId,
            'lastIndex': lastIndex
        },
        () => GetGuidesBySpotId(spotId, lastIndex)
    )
    console.log('get guide by keyword over')
}

module.exports = {
    'GET /guides/by-spot-id': fn
}