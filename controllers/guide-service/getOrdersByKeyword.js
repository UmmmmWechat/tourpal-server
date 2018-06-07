const CommonCotroller = require('../CommonController')
const GetOrdersByKeyword = require('../../serivice_impl/guide/GetOrdersByKeyword')

/* 
 * @param {int} guideId id
 * @param {} keyword
 * @param {int} lastIndex
 */

var fn = async (ctx, next) => {
    let guideId = ctx.query.guideId
    let lastIndex = ctx.query.lastIndex || 0
    lastIndex = parseInt(lastIndex)
    let keyword = ctx.query.keyword
    await CommonCotroller(
        ctx,
        next,
        {
            'guideId': guideId,
            'lastIndex': lastIndex,
            'keyword': keyword
        },
        () => GetOrdersByKeyword(guideId, keyword, lastIndex)
    )
    console.log('get order by keyword over')
}

module.exports = {
    'GET /orders/for-guide/by-keyword': fn
}