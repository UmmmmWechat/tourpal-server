const config = require('../../config')
const https = require('https')
const Cache = require('../../utils/cache')
const ResultMessage = require('../../utils/ResultMessage')
// {"access_token": "ACCESS_TOKEN", "expires_in": 7200}
// {"errcode": 40013, "errmsg": "invalid appid"}
module.exports = async function () {
    return new Promise( async (resolve, reject) => {
        let accessToken
        let delt

        try {
            accessToken = await Cache.getResource(config.accessTokenKey)
        } catch (error) {
            console.log(error)
        }

        //  如果在cache中找到了，就直接返回了
        if (accessToken) {
            resolve(accessToken)
        }

        const URL = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential' +
            '&appid=' + config.appId +
            '&secret=' + config.appSecret
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
                        if (!data.errcode) {
                            accessToken = data.access_token
                            delt = data.expires_in * 1000
                            Cache.setResource(config.accessTokenKey, accessToken, delt)
                            resolve(accessToken)
                        }
                    })
                }
            )
            await request.end()
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}