const config = require('../../config')
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
const ResultMessage = require('../../utils/ResultMessage')

/*
public class GuideModify {
    public int id;

    public Location location; //地址

    public String wechat; //微信号

    public String phone; //电话号码

    public String introduction; //自我介绍

    public List<Integer> favorSpots; //景点
}
*/
module.exports = async function (guide) {
    try {
        await GuideDAO.update(guide)
        return ResultMessage.SUCCESS
    } catch (e) {
        console.log(e)
        throw e
    }   
}