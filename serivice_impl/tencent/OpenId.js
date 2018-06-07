const config = require('../../config')
const request = require('request')
/**
 * 
 * @param {String} code 微信的临时code
 * @return openId
 * {"session_key":"EYHiOw5v7tP4HSvxegKjmw==","openid":"o57y35dO3e95DXwQtZ9JuZWIjVRA"}
 * {"errcode":40163,"errmsg":"code been used, hints: [ req_id: YAeYoA0707th21 ]"}
 */
module.exports = async function (code) {
    // 验证code的api接口
    const URL = 'https://api.weixin.qq.com/sns/jscode2session?' +
        'appid=' + config.appId +
        '&secret=' + config.appSecret +
        '&js_code=' + code +
        '&grant_type=authorization_code'
    return new Promise((resolve, reject) => {
        request(URL, function (error, response, body) {
            body = JSON.parse(body)
            if (!error && response.statusCode == 200 && !body.errcode) {
                console.log('openid',body.openid)
                resolve(body.openid)
            } else {
                reject(body.errmsg)
            }
        })
    })
}