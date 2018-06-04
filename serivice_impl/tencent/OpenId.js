const config = require('../../config')
const https = require('https')
/**
 * 
 * @param {String} code 微信的临时code
 * @return openId
 * {"session_key":"EYHiOw5v7tP4HSvxegKjmw==","openid":"o57y35dO3e95DXwQtZ9JuZWIjVRA"}
 * {"errcode":40163,"errmsg":"code been used, hints: [ req_id: YAeYoA0707th21 ]"}
 */
module.exports = async function (code) {
    let openId
    // 验证code的api接口
    const URL = 'https://api.weixin.qq.com/sns/jscode2session?' +
        'appid=' + config.appId +
        '&secret=' + config.appSecret +
        '&js_code=' + code +
        '&grant_type=authorization_code'
    try {
        let request = await https.get(
            URL,
            (res) => {
                console.log(res.statusCode)
                console.log(res.statusMessage)
                let data = '';
                res.setEncoding('utf-8')
                res.on('data', (chunk) => {
                    data += chunk
                })
                res.on('end', () => {
                    data = JSON.parse(data)
                    if (!data.errcode) { // 如果没有出错，就是正确获得了session key
                        openId = data.openid // 拿到唯一指定openid
                    } else {
                        console.log(data.errcode)
                    }
                })
            }
        )
    } catch (err) {
        console.log(err)
    }
    await request.end()
    return openId
}