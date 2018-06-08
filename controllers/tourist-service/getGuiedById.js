const CommonCotroller = require('../CommonController')
const GetGuideById = require('../../serivice_impl/tourist/GetGuideById')
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
            'guideId': guideId
        },
        () => GetGuideById(guideId)
    )
    console.log('get guide by id over')
}

module.exports = {
    'GET /guides/by-id': fn
}