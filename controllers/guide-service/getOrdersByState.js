const CommonCotroller = require('../CommonController')
const GetOrdersByState = require('../../serivice_impl/guide/GetOrdersByState')

/* 
 * @param {int} guideId id
 * @param {} state
 * @param {int} lastIndex
 */

var fn = async (ctx, next) => {
    let guideId = ctx.query.guideId
    guideId = parseInt(guideId)
    let lastIndex = ctx.query.lastIndex
    lastIndex = parseInt(lastIndex)
    let state = ctx.query.state
    await CommonCotroller(
        ctx,
        next,
        {
            'guideId': guideId,
            'lastIndex': lastIndex,
            'state': state
        },
        () => GetOrdersByState(guideId, state, lastIndex)
    )
    console.log('get order by state over')
}

module.exports = {
    'GET /orders/for-guide/by-state': fn
}