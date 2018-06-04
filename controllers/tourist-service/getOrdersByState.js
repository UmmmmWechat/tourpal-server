const CommonCotroller = require('../CommonController')
const GetOrdersByState = require('../../serivice_impl/tourist/GetOrdersByState')
/* 
* @param {int} touristId 游客id
* @param {} keyword
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let touristId = ctx.query.touristId
    let lastIndex = ctx.query.lastIndex
    let state = ctx.query.state
    await CommonCotroller(
        ctx,
        next,
        {
            'touristId': touristId,
            'state': state,
            'lastIndex': lastIndex
        },
        () => GetOrdersByState(touristId, state, lastIndex)
    )
}

module.exports = {
    'GET /orders/for-tourist/by-state': fn
}