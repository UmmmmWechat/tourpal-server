const CommonCotroller = require('../CommonController')
const GetGuideById = require('../../serivice_impl/tourist/GetGuideById')
const CutGuide = require('../../utils/CutGuide')
/* 
* @param {int} spotId 景点ID
* @param {int} lastIndex
*/
/**
 * 这边拿到的是基本信息
 * @param {*} ctx 
 * @param {*} next 
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
        async () => {
            let guide = await GetGuideById(guideId)
            guide = CutGuide(guide)
            return guide
        }
    )
    console.log('get guide basic info by id over')
}

module.exports = {
    'GET /guides/by-id/basic': fn
}