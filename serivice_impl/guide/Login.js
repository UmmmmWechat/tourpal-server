const config = require('../../config')
// const GuideDAO = require('../../dao/guide/guide')
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
const GetOpenId = require('../../serivice_impl/tencent/OpenId')
const ResultMessage = require('../../utils/ResultMessage')

module.exports = async function (code) {
    let openId
    try {
        openId = await GetOpenId(code)
        // 拿不到openId
        if (!openId) {
            throw new Error(ResultMessage.NOT_FOUND)
        }
        // 去找guide信息
        let guide = await GuideDAO.findByOpenId(openId)
        guide = guide[0]
        if (!guide) {
            // 没有这个游客，这说明需要注册啦
            throw new Error(ResultMessage.NOT_FOUND)
        } else {
            return guide.id
        }
    } catch (error) {
        throw error
    }
}