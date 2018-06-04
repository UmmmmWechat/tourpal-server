const GuideDAO = require('../../dao/guide/guide')
const GuideSortBy = require('./GuideSortBy')
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = 10
const ResultMessage = require('../../utils/ResultMessage')

/**
 * 
 * @param {*} spotId 
 * @param {*} lastIndex 
 */
module.exports = function (spotId, lastIndex) {
    return new Promise((resolve, reject) => {
        let key = 'guide' + spotId
        CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            GuideSortBy,
            (res) => {  // res是查到的数据
                resolve(res)
            },
            () => GuideDAO.findByFavorSpot(spotId)
        )
    })
}