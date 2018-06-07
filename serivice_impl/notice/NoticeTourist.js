const config = require('../../config')
const ResultMessage = require('../../utils/ResultMessage')
const OrderState = require('../../utils/OrderState')
// const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
// const SpotDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/spot/spot`)

const PATTERN = config.isTest ? 'daostub' : 'dao'
const SpotDAO = require(`../../${PATTERN}/spot/spot`)
const TouristDAO = require(`../../${PATTERN}/tourist/tourist`)
const GuideDAO = require(`../../${PATTERN}/guide/guide`)
const FormDAO = require(`../../${PATTERN}/message/message`)
const Cache = require('../../utils/cache')
const GetAccessToken = require('../tencent/AccessToken')
const request = require('request')
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
var noticeInvitationResult = (order) => {
    let guideId = order.guideId
    let touristId = order.touristId
    let spotId = order.spotId
    let travelDate = order.travelDate

    return new Promise(async (resolve, reject) => {
        let guide = await GuideDAO.findById(guideId)
        guide = guide[0]
        let spot = await SpotDAO.findById(spotId)
        spot = spot[0]
        let tourist = await TouristDAO.findById(touristId)
        tourist = tourist[0]
        let accessToken = await GetAccessToken()

        console.log(guide, spot, tourist, order)
        // let accessToken = await Cache.getResource(config.accessTokenKey)
        // 判空
        if (!guide || !spot || !tourist) {
            reject(ResultMessage.NOT_FOUND)
        }
        if (!accessToken) {
            reject(ResultMessage.ERROR_ACCESS_TOKEN)
        }
        // 向数据库找formId
        let formItem = await FormDAO.findByOrderId(order.id)
        console.log('notice result:', formItem)
        formItem = formItem[0]
        if (formItem) {
            // 用过的的就要去掉了
            FormDAO.removeById(formItem.id)
        } else {
            reject(ResultMessage.NOT_FOUND)
        }
        // 验证是否过期
        let createdDate = formItem.createdDate
        let now = new Date()
        let delt = (now - createdDate) / (3600 * 1000 * 24)
        if (delt > 7) { // 过期抛 超时 错
            reject(ResultMessage.TIMEOUT_FORM_ID)
        }
        // 未过期
        let formId = formItem.formId
        let template = config.templateMessages.invitationResult
        //https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN
        // 状态转换
        let result = '接受'
        let ps = ''
        if (order.state === OrderState.CANCELED) {
            result = '拒绝'
            ps = `原因：${order.cancelReason}`
        } else {
            ps = `向导手机：${guide.phone}，向导微信：${guide.wechat}`
        }
        let keywords = template.keywords
        let params = {
            touser: tourist.openId,
            template_id: template.id,
            form_id: formId,
            data: {
                [keywords.guideName]: {
                    value: guide.realName
                },
                [keywords.spotName]: {
                    value: spot.name
                },
                [keywords.travelDate]: {
                    value: order.travelDate
                },
                [keywords.result]: {
                    value: result
                },
                [keywords.ps]: {
                    value: ps
                }
            }
        }
        request({
            url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + accessToken,
            method: "POST",
            json: true,
            body: params
        }, function (err, response, body) {
            if (!err) {
                resolve(ResultMessage.SUCCESS)
            } else {
                reject(err)
            }
            // 发过的就要去掉啦
            FormDAO.removeById(formItem.id)
        })
    })
}


module.exports = {
    noticeInvitationResult
}