const expect = require('chai').expect
const OrderDAO = require('../../daostub/order/order')
const Order = require('../../entity/Order')

let spotId = 'spotId'
let guideId = 'guideId'
let touristId = 'touristId'


describe('邀请guide', function () {
    this.timeout(0)
    const InviteGuide = require('../../serivice_impl/tourist/InviteGuide')
    it ('只有一个用例',async function () {
        let order = new Order()
        order.id = 'orderId'
        order.guideId = guideId
        order.touristId = touristId
        order.spotId = spotId
        let res = await InviteGuide(order)
        expect(res).to.be.equal('SUCCESS')
        res = await OrderDAO.findById('orderId')
        res = res[0]
        if (!res) {
            throw new Error('Order NOT FOUND')
        }
        expect(res.spotId).to.be.equal(spotId)
        expect(res.guideId).to.be.equal(guideId)
    })
})