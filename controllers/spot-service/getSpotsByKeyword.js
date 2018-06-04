const GetSpotsByKeyword = require('../../serivice_impl/spot/GetSpotsByKeyword')

// querySpots(string keyword, String city ,int lastIndex);
var fn = async (ctx, next) => {
    let keyword = ctx.query.keyword
    let lastIndex = ctx.query.lastIndex
    let city = ctx.query.city

    await CommonCotroller(
        ctx,
        next,
        {
            keyword: keyword,
            lastIndex: lastIndex,
            city: city
        },
        () => GetSpotsByKeyword(keyword, city ,lastIndex)
    )
    console.log('get spots by keyword over')
}

module.exports = {
    'GET /spots/by-keyword-and-city': fn
}