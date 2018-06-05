const config = require('../../config')
const ResultMessage = require('../../utils/ResultMessage')
// const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
// const SpotDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/spot/spot`)
const SpotDAO = require('../../dao/spot/spot')
const TouristDAO = require('../../dao/tourist/tourist')
const GuideDAO = require('../../dao/guide/guide')
const Cache = require('../../utils/cache')
const https = require('https')
const querystring = require('querystring')
/**
 * this.id = '';

    this.touristId = '';

    this.guideId = '';

    this.spotId = '';

    this.generatedDate = '';

    this.travelDate = '';

    this.message = '';

    this.state = '';

    this.cancelReason = '';

    this.feedback = '';
 * 
 */
/**
 * 通知guide有新的邀请
 * @param {Order} order
 */
var noticeInvitationResult = async (order) => {
    // TODO: 发送模板消息
    let guideId = order.guideId
    let touristId = order.touristId
    let spotId = order.spotId
    let travelDate = order.travelDate
    let formId = ''

    try {
        let guide = await GuideDAO.findById(guideId)[0]
        let spot = await SpotDAO.findById(spotId)[0]
        let tourist = await TouristDAO.findById(touristId)[0]
        let accessToken = await Cache.getResource(config.accessTokenKey)
        // let formId = TODO: 向数据库找formId
        // 判空
        if (!guide || !spot || !tourist) {
            throw new Error(ResultMessage.NOT_FOUND)
        }
        if (!accessToken) {
            throw new Error(ResultMessage.ERROR_ACCESS_TOKEN)
        }
        let template = config.templateMessages.invitationResult
        //https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN
        // 请求api
        let options = {
            hostname: 'https://api.weixin.qq.com',
            path: '/cgi-bin/message/wxopen/template/send?access_token=' + accessToken,
            method: 'POST'
        };
        let params = querystring.stringify({
            touser: tourist.openId,
            template_id: template.id,
            form_id: formId
        })
        // TODO: 完善

    } catch (error) {
        throw error
    }
    
}


module.exports = {
    noticeInvitationResult
}