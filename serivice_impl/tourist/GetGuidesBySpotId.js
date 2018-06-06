const config = require('../../config')
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
const GuideSortBy = require('./GuideSortBy')
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = 10
const ResultMessage = require('../../utils/ResultMessage')
const CutGuide = require('../../utils/CutGuide')

/**
 * 
 * @param {*} spotId 
 * @param {*} lastIndex 
 */
module.exports = async function (spotId, lastIndex) {
    let result
    let key = 'guide' + spotId
    try {
        await CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            GuideSortBy,
            (res) => { // res是查到的数据
                result = res
            },
            () => GuideDAO.findByFavorSpot(spotId)
        )
    } catch (error) {
        throw error
    }
    // 去掉敏感信息
    for (let i = 0; i < result.length; i++) {
        let guide = result[i]
        result[i] = CutGuide(guide)
    }
    return result
}