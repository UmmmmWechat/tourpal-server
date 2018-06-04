
module.exports = function (guide) {
    delete guide.idCard
    delete guide.openId
    delete guide.phone
    delete guide.wechat
    delete guide.favorSpots
    return guide
}