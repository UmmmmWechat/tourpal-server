/*
    private int id;

    private int spotPoint;

    private int guidePoint;

    private String comment;
*/
const config = require('../../config')
const Order = require('../../entity/Order')
const Guide = require('../../entity/Guide')
const Spot = require('../../entity/Spot')
const OrderDao = require(`../../${config.isTest ? 'daostub' : 'dao'}/order/order`)
const GuideDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/guide/guide`)
const SpotDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/spot/spot`)
const ResultMessage = require('../../utils/ResultMessage')
const OrderState = require('../../utils/OrderState')
const Cache = require('../../utils/cache')

// 参数为 {int} orderId, {Feedback} feedback
/**
 * 评价一单
 * 还要更新 guide 和 spot 的信息
 * @param {*} orderId
 * @param {Feedback} feedback
 */
module.exports = async function (orderId, feedback) {
    let order = new Order()
    let key = 'key'
    try {
        // 查出来 
        let res = await OrderDao.findById(orderId)
        res = res[0]
        if (res) {
            Object.assign(order, res)
        } else {
            throw new Error(ResultMessage.NOT_FOUND)
        }
        // 加上feedback
        order.feedback = feedback
        // 景点和向导评分
        let spotPoint = feedback.spotPoint
        let guidePoint = feedback.guidePoint
        // cache中的key
        key = 'order_tourist' + order.touristId + order.state
        Cache.removeResource(key)

        key = 'order_guide' + order.guideId + order.state
        Cache.removeResource(key)
        //状态变成了finished
        order.state = OrderState.FINISHED
        // 更新
        await OrderDao.update(order)
        // cache中的key
        key = 'order_tourist' + order.touristId + order.state
        Cache.removeResource(key)

        key = 'order_guide' + order.guideId + order.state
        Cache.removeResource(key)

        // 其他业务逻辑
        // 计算guide的信息
        // 先找出
        // console.log('开始查询guide')
        let guide = await GuideDAO.findById(order.guideId)
        guide = guide[0]
        if (!guide) {
            throw new Error('GUIDE_NOT_FOUND')
        }
        // console.log('查询guide结束')
        let numOfFinishedOrders = guide.numOfFinishOrder
        let rate = guide.goodFeedbackRate // 这个rate是百分比 * 100
        // 开始计算 包括将5 星数转换成好评率
        rate = (((rate / 100) * 5) * numOfFinishedOrders + guidePoint) / (numOfFinishedOrders + 1)
        rate = rate / 5 * 100
        // 更新
        guide.numOfFinishOrder = numOfFinishedOrders + 1
        guide.goodFeedbackRate = rate
        // 数据库
        // console.log('开始更新guide')
        await GuideDAO.update(guide)
        // console.log('结束更新guide')

        // 计算spot信息
        // 数据库查询
        // console.log('开始查询spot')
        let spot = await SpotDAO.findById(order.spotId)
        spot = spot[0]
        if (!spot) {
            throw new Error('SPOT_NOT_FOUND')
        }
        // console.log('结束查询spot')
        let popularity = spot.popularity
        let recommendLevel = spot.recommendLevel
        recommendLevel = (recommendLevel * popularity + spotPoint) / (popularity + 1)
        // 更新
        spot.popularity = popularity + 1
        spot.recommendLevel = recommendLevel
        // 数据库
        // console.log('开始更新spot')
        await SpotDAO.update(spot)
        // console.log('更新结束')
        // 成功
        return ResultMessage.SUCCESS
    } catch (err) {
        throw err
    }
}