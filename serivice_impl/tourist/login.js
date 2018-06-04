const GetOpenId = require('../tencent/OpenId')
const TouristDAO = require('../../dao/tourist/tourist')

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
         // 再从数据库查询 实体信息
         tourist = await TouristDAO.findByOpenId(openId)
         return tourist.id
     } catch (error) {
         
     }
}