const GetSpotsByKeyword = require('../../serivice_impl/guide/GetSpotsByKeyword')
const CommonCotroller = require('../CommonController')
// querySpots(string keyword, String city ,int lastIndex);
var fn = async (ctx, next) => {
    let keyword = ctx.query.keyword
    let lastIndex = ctx.query.lastIndex || 0
    lastIndex = parseInt(lastIndex)

    await CommonCotroller(
        ctx,
        next,
        {
            keyword: keyword,
            lastIndex: lastIndex
        },
        () => GetSpotsByKeyword(keyword,lastIndex)
    )
    console.log('get spots by keyword over')
}

module.exports = {
    'GET /spots/by-keyword': fn
}