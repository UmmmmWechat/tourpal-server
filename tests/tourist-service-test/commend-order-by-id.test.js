let expect = require('chai').expect
const Feedback = require('../../entity/Feedback')

const GuideDAO = require('../../daostub/guide/guide')
const OrderDAO = require('../../daostub/order/order')
const SpotDAO = require('../../daostub/spot/spot')

const Guide = require('../../entity/Guide')
const Order = require('../../entity/Order')
const Spot = require('../../entity/Spot')

describe('游客评价订单', function () {
    this.timeout(0)

    let orderId = 'orderToBeCommended'
    let spotId = 'spotIdInOrderToBeCommended'
    let guideId = 'guideIdInOrderToBeCommended'
    before(async function () {
        let order = new Order()
        order.id = orderId
        order.guideId = guideId
        order.spotId = spotId
        await OrderDAO.insert(order)

        let guide = new Guide()
        guide.goodFeedbackRate = 0
        guide.numOfFinishOrder = 0
        guide.id = guideId
        await GuideDAO.insert(guide)

        let spot = new Spot()
        spot.id = spotId
        spot.popularity = 0
        spot.recommendLevel = 0
        await SpotDAO.insert(spot)
    })
    const CommendOrderById = require('../../serivice_impl/tourist/CommendOrderById')
    it('评价为5星，5星，之后guide的好评率为100，景点的星级为5星', async function () {
        let feedback = new Feedback()
        feedback.guidePoint = 5
        feedback.spotPoint = 5
        try {
            let res = await CommendOrderById(orderId, feedback)
            expect(res).to.be.equal('SUCCESS')
        } catch (err) {
            console.log('order', err)
        }
        try {
            let guide = await GuideDAO.findById(guideId)
            guide = guide[0]
            expect(guide.goodFeedbackRate).to.be.equal(100)
            expect(guide.numOfFinishOrder).to.be.equal(1)
        } catch (err) {
            console.log('guide', err)
        }
        let spot = await SpotDAO.findById(spotId)
        spot = spot[0]
        expect(spot.popularity).to.be.equal(1)
        expect(spot.recommendLevel).to.be.equal(5)
    })

    it('评价为3星，3星，之后guide的好评率为80，景点的星级为4星', async function () {
        let feedback = new Feedback()
        feedback.guidePoint = 3
        feedback.spotPoint = 3
        try {
            let res = await CommendOrderById(orderId, feedback)
            expect(res).to.be.equal('SUCCESS')
        } catch (err) {
            console.log('order', err)
        }
        try {
            let guide = await GuideDAO.findById(guideId)
            guide = guide[0]
            expect(guide.goodFeedbackRate).to.be.equal(80)
            expect(guide.numOfFinishOrder).to.be.equal(2)
        } catch (err) {
            console.log('guide', err)
        }
        let spot = await SpotDAO.findById(spotId)
        spot = spot[0]
        expect(spot.popularity).to.be.equal(2)
        expect(spot.recommendLevel).to.be.equal(4)
    })
})