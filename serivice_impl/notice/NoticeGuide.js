const ResultMessage = require('../../utils/ResultMessage')
var noticeNewInvitation = (order) => {
    return new Promise((resolve, reject) => {
        // TODO: 发送模板消息
        resolve(ResultMessage.SUCCESS)
    })
}


module.exports = {
    noticeNewInvitation
}