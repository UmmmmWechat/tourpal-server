const ResultMessage = require('../../utils/ResultMessage')
/**
 * 通知游客邀请结果
 * @param {*} order 
 */
var noticeInviteResult = (order) => {
    //TODO: 发送
    return new Promise((resolve, reject) => {
        resolve(ResultMessage.SUCCESS)
    })
}

module.exports = {
    noticeInviteResult
}