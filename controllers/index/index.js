const config = require('../../config')
const getAccessToken = require('../../serivice_impl/tencent/AccessToken')
const CommonController = require('../CommonController')
const OpenId = require('../../serivice_impl/tencent/OpenId')
const querystring = require('querystring')
const https = require('https')
const request = require('request')
// const request = require('req')
// var fn = async function (onSuccess, onError) {
//     await setTimeout(() => onSuccess('dkdkdkd'))
// }
var index_fn = async (ctx, next) => {
    let hasError = false
    try {
        // 未过期
        let formId = ctx.request.body.formId
        let openId = ctx.request.body.openId
        if (!formId || !openId) {
            ctx.status = 400
            ctx.body = 'param error'
            return
        }
        let keywords = config.templateMessages.invitationResult.keywords
        let template = config.templateMessages.invitationResult
        let accessToken = await getAccessToken()
        let params = {
            touser: openId,
            template_id: template.id,
            form_id: formId,
            data: {
                [keywords.guideName]: {value:'guideName'},
                [keywords.spotName]: {value:'spotName'},
                [keywords.travelDate]: {value:'2010101010'},
                [keywords.result]: {value: 'result'},
                [keywords.ps]: {value:'pspspspspsp'}
            }
        }
        // request()
        request({
            url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + accessToken,
            method: "POST",
            json: true,
            body: params
          }, function(err, response, body) {
            ctx.body = body
            console.log(body);
          });
        //https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN
        // 请求api

        if (hasError) {
            throw new Error()
        } else {
            ctx.body = accessToken
        }
    } catch (error) {
        console.log(error)
        ctx.body = error
        ctx.status = 500
    }
}
// 这个Index可以用来获取 openId
module.exports = {
    'POST /index': index_fn
}