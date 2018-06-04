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
module.exports = async function (spotId, lastIndex) {
    let result
        let key = 'guide' + spotId
        await CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            GuideSortBy,
            (res) => {  // res是查到的数据
                result = res
            },
            () => GuideDAO.findByFavorSpot(spotId)
        )
    return result
}