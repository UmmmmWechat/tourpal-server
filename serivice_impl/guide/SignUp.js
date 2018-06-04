const GuideDAO = require('../../dao/guide/guide')
const ResultMessage = require('../../utils/ResultMessage')
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
 * 注册，其实是新增一个guide
 * @param {Guide} guide 
 * 这个guide已经有 openId了，为什么呢，因为在打开小程序的那一刻，就已经将openId下发
 */
module.exports = async function (guide) {
    try {
        await GuideDAO.insert(guide)
        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}