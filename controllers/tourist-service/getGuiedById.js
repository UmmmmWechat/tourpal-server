const CommonCotroller = require('../CommonController')
const GetGuidesBySpotId = require('../../serivice_impl/tourist/GetGuidesBySpotId')
/* 
* @param {int} spotId 景点ID
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let guideId = ctx.query.guideId
    guideId = parseInt(guideId)
    await CommonCotroller(
        ctx,
        next,
        {
            'spotId': spotId
        },
        () => undefined
    )
    console.log('get guide by id over')
}

module.exports = {
    'GET /guides/by-id': fn
}