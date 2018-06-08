const config = require('../../config')
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao' }/guide/guide`)
const ResultMessage = require('../../utils/ResultMessage')

module.exports = async (guideId) => {
    try {
        let guide = await GuideDAO.findById(guideId)
        guide = guide[0]
        if (!guide) {
            throw new Error(ResultMessage.NOT_FOUND)
        }
        return guide
    } catch (error) {
        throw error
    }
}