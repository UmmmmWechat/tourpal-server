const CommonController = require('../CommonController')
const ModifyGuideInfo = require('../../serivice_impl/guide/ModifyGuideInfo')
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
var fn = async (ctx, next) => {
    const body = ctx.request.body
    let guide = body.guide
    guide = JSON.parse(guide)

    await CommonController(
        ctx,
        next, {
            guide: guide
        },
        () => ModifyGuideInfo(guide)
    )
}

module.exports = {
    // guide
    'POST /guides/modify': fn
}