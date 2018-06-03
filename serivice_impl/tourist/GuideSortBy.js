// 排序guide， 以及好评率 和 完成单数
module.exports = (x, y) => {
    let valueX = x.goodFeedbackRate
    let valueY = y.goodFeedbackRate
    return valueX - valueY
}