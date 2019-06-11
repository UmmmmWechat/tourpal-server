const config = require('../../config')
const GetOpenId = require('../tencent/OpenId')
const TouristDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/tourist/tourist`)
const ResultMessage = require('../../utils/ResultMessage')
const Tourist = require('../../entity/Tourist')
/**
 * 游客登陆
 * @param {String} code 临时凭证
 * @return touristId 整个的touris信息
 */
module.exports = async function (code) {
    let openId
    let tourist
    try {
        // 先调api拿到open id
        openId = await GetOpenId(code)
        if (!openId) {
            throw new Error(ResultMessage.NOT_FOUND)
        }
        // 再从数据库查询 实体信息
        tourist = await TouristDAO.findByOpenId(openId)
        tourist = tourist[0]
        if (!tourist) { // 如果不存在，就给他新增一个呗
            tourist = new Tourist()
            tourist.openId = openId
            let insertResult = await TouristDAO.insert(tourist)
            let id = insertResult.insertId
            return {
                message: ResultMessage.NOT_REGISTER,
                touristId: id
            }
        } else if (!tourist.idCard) {
            return {
                message: ResultMessage.NOT_REGISTER,
                touristId: tourist.id
            }
        } else {
            return {
                message: ResultMessage.SUCCESS,
                touristId: tourist.id
            }
        }
        return tourist.id
    } catch (error) {
        throw error
    }
}