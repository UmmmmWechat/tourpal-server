const CommonCotroller = require('../CommonController')
const GetGuideByKeyword = require('../../serivice_impl/tourist/GetGuidesByKeyword')

/*
* @param {int} lastIndex
*/
// /spot?keyword=&lastIndex=
var fn = async (ctx, next) => {
    let keyword = ctx.query.keyword
    let lastIndex = ctx.query.lastIndex
    await CommonCotroller(
        ctx,
        next,
        {
            'keyword': keyword,
            'lastIndex': lastIndex
        },
        () => GetGuideByKeyword(keyword, lastIndex)
    )
    console.log('get guide by keyword over')
}

module.exports = {
    'GET /guides/by-keyword': fn
}