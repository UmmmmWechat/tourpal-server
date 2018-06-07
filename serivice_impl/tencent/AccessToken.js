const config = require('../../config')
const https = require('https')
const Cache = require('../../utils/cache')
const ResultMessage = require('../../utils/ResultMessage')
// {"access_token": "ACCESS_TOKEN", "expires_in": 7200}
// {"errcode": 40013, "errmsg": "invalid appid"}
module.exports = async function () {
    return new Promise((resolve, reject) => {
        let accessToken
        let delt
        Cache.getResource(config.accessTokenKey)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                console.log(error)
                const URL = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential' +
                    '&appid=' + config.appId +
                    '&secret=' + config.appSecret
                let request = https.get(
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
                            } else {
                                reject(data.errmsg)
                            }
                        })
                    }
                )
                request.end()
            })
    })
}