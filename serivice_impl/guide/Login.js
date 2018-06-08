const config = require('../../config')
// const GuideDAO = require('../../dao/guide/guide')
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
const Guide = require('../../entity/Guide')
const Cache = require('../../utils/cache')
const GetOpenId = require('../../serivice_impl/tencent/OpenId')
const ResultMessage = require('../../utils/ResultMessage')

module.exports = async function (code) {
    let openId
    try {
        openId = await GetOpenId(code)
        // 拿不到openId
        if (!openId) {
            throw new Error(ResultMessage.INVALID_CODE)
        }
        // 去找guide信息
        let guide = await GuideDAO.findByOpenId(openId)
        guide = guide[0]
        if (!guide) {   // 如果系统没有这个guide
            // 给它插入一个新的初始的
            guide = new Guide()
            guide.openId = openId
            let insertResult = await GuideDAO.insert(guide)
            return {
                message: ResultMessage.NOT_REGISTER,
                guideId: insertResult.insertId
            }
        } else if (!guide.idCard) { // 未实名
            return {
                message: ResultMessage.NOT_REGISTER,
                guideId: guide.id
            }
        } else {    // 已经注册过了
            return {
                message: ResultMessage.SUCCESS,
                guideId: guide.id
            }
        }
    } catch (error) {
        throw error
    }
}