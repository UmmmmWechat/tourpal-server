const CommonController = require('../CommonController')
const SignUp = require('../../serivice_impl/guide/SignUp')
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

var fn = async (ctx, next) => {
    const body = ctx.request.body
    let guideInfo = body.guide
    guideInfo = JSON.parse(guideInfo)
    CommonController(
        ctx,
        next,
        {
            guide: guideInfo
        },
        () => SignUp(guideInfo)
    )
}

module.exports = {
    // {Object} guide
    'POST /sign-up/guide': fn
}