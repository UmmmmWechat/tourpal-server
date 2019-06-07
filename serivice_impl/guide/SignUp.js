const config = require('../../config')
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
const GetOpenId = require('../tencent/OpenId')
const ResultMessage = require('../../utils/ResultMessage')
const Cache = require('../../utils/cache')
/* 
public class GuidePre {
    public String openId;

    public String realName; //真实名

    public String idCard; //身份证

    public char gender; //性别

    public Location location; //地址

    public String wechat; //微信号

    public String phone; //电话号码

    public String introduction; //自我介绍

    public List<Integer> favorSpots; //景点的id list
}
*/
/**
 *
 * TODO: 其实是更新， 不是增加
 * @param {Guide} guide
 */
module.exports = async function (guide) {
    try {
        let nowYear = new Date().getFullYear();
        let guideYear = parseInt(guide.idCard.substr(6, 4));
        guide.age = nowYear - guideYear;
        await GuideDAO.update(guide)
    } catch (error) {
        throw error
    }

    return ResultMessage.SUCCESS
}