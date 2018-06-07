const expect = require('chai').expect
const MessageDAO = require('../../daostub/message/message')
const OrderDAO = require('../../daostub/order/order')
const Order = require('../../entity/Order')
const Message = require('../../entity/Message')

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
        let formId = 'formId'
        let res = await InviteGuide(order, formId)
        expect(res).to.be.equal('SUCCESS')
        res = await OrderDAO.findById('orderId')
        res = res[0]
        if (!res) {
            throw new Error('Order NOT FOUND')
        }
        expect(res.spotId).to.be.equal(spotId)
        expect(res.guideId).to.be.equal(guideId)
        
        res = await MessageDAO.findByOrderId(order.id)
        res = res[0]
        expect(res.orderId).to.be.equal(order.id)
        expect(res.formId).to.be.equal(formId)
    })
})