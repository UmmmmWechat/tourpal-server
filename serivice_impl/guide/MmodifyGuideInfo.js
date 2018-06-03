const GuideDAO = require('../../dao/guide/guide')

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
module.exports = function (guide) {
   return new Promise((resolve, reject) => {
        GuideDAO.update(guide)
        .then(() => {
            resolve()
        })
        .catch((err) => {
            console.log(err)
            reject(err)
        })
   })
}