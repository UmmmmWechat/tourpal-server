const CommonCotroller = require('../CommonController')
const GetOrdersByKeyword = require('../../serivice_impl/tourist/GetOrdersByKeyword')
/* 
* @param {int} touristId 游客id
* @param {} keyword
* @param {int} lastIndex
*/

var fn = async (ctx, next) => {
    let touristId = ctx.query.touristId
    let lastIndex = ctx.query.lastIndex
    lastIndex = parseInt(lastIndex)
    let keyword = ctx.query.keyword
    await CommonCotroller(
        ctx,
        next,
        {
            'touristId': touristId,
            'keyword': keyword,
            'lastIndex': lastIndex
        },
        () => GetOrdersByKeyword(touristId, keyword, lastIndex)
    )
}

module.exports = {
    'GET /orders/for-tourist/by-keyword': fn
}