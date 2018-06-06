const config = require('../../config')
// const GuideDao = require(`../../daostub/guide/guide`)
const Guide = require('../../entity/Guide')
const ResultMessage = require('../../utils/ResultMessage')
const GuideDao = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)

module.exports = async function (guideId) {
    try {
        let res = await GuideDao.findById(guideId)
        let guide = res[0]
        if (guide) {
            return guide
        } else {
            throw new Error(ResultMessage.NOT_FOUND)
        }
    } catch (error) {
        throw error
    }
}