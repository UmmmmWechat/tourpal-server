// const GuideDAO = require('../../dao/guide/guide')
const GuideDAO = require('../../daostub/guide/guide')
const GuideSortBy = require('./GuideSortBy')
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = 10
const ResultMessage = require('../../utils/ResultMessage')

/**
 * 
 * @param {*} keyword 
 * @param {*} lastIndex 
 */
module.exports = async function (keyword, lastIndex) {
        let key = 'guide' + keyword
        let result;
        await CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            GuideSortBy,
            (res) => {  // res是查到的数据
                result = res;
            },
            () => GuideDAO.findByKeyword(keyword)
        )

        return result
}