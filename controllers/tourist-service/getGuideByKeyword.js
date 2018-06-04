const CommonCotroller = require('../CommonController')
const GetGuideByKeyword = require('../../serivice_impl/tourist/GetGuidesByKeyword')

/*
* @param {int} lastIndex
*/
// /spot?keyword=&lastIndex=
var fn = async (ctx, next) => {
    let keyword = ctx.query.keyword
    let lastIndex = ctx.query.lastIndex
    // CommonCotroller(
    //     ctx,
    //     next,
    //     {
    //         'keyword': keyword,
    //         'lastIndex': lastIndex
    //     },
    //     () => {
    //         return new Promise((resolve, reject) => {
    //             GetGuideByKeyword(keyword, lastIndex)
    //             .then(resolve)
    //             .catch(reject)
    //         })
    //     }
    // )
    await GetGuideByKeyword(keyword, lastIndex)
    .then(res => {
        ctx.body = res
    })
    .catch(err => {
        ctx.response.status = 500
        ctx.body = err
    })
}

module.exports = {
    'GET /guides/by-keyword': fn
}