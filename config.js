const CONF = {
    // 微信小程序 App ID
    appId: 'wxa3dd150b667dff82',

    // 微信小程序 App Secret
    appSecret: 'a12b0686230289e20ed891faa5b1f887',

    // 是否测试环境
    isTest: true,

    // access_token_key
    accessTokenKey: 'accessToken',

    // 模板消息
    templateMessages: {
        invitation: {
            id: 'aEMHnDvJ3642xG50fswGfcJslxfSmudWNldIZiW4Ydg',
            keywords: {
                guideName: 'keyword1',
                spotName: 'keyword2',
                travelDate: 'keyword3',
                ps: 'keyword4'
            }
        },

        invitationResult: {
            id: 'kbfeScAajSKG-8g5DeM2LrWxPQ0ot5UKhu0nQmqpuWc',
            keywords: {
                result: 'keyword1',
                guideName: 'keyword2',
                spotName: 'keyword3',
                travelDate: 'keyword4',
                ps: 'keyword5'
            }
        }
    }
}

module.exports = CONF