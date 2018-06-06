const expect = require('chai').expect
const OrderState = require('../../utils/OrderState')
const OrderDAO = require('../../daostub/order/order')
const Order = require('../../entity/Order')
const CheckOrder = require('../../serivice_impl/guide/AcceptOrRejectOrder')



describe ('Guide处理邀请', function () {
    this.timeout(0)
    before(async function () {
        let order = new Order()
        order.id = 1
        order.state = OrderState.WAITING
        await OrderDAO.insert(order)
        order = new Order()
        order.id = 2
        order.state = OrderState.WAITING
        await OrderDAO.insert(order)
    })
    it('通过邀请', async function () {
        let res = await CheckOrder.acceptOrder(1)
        expect(res).to.be.equal('SUCCESS')
        res = await OrderDAO.findById(1)
        res = res[0]
        expect(res.state).to.be.equal(OrderState.ONGOING)
    })
    it('通过邀请', async function () {
        let res = await CheckOrder.rejectOrder(2)
        expect(res).to.be.equal('SUCCESS')
        res = await OrderDAO.findById(2)
        res = res[0]
        expect(res.state).to.be.equal(OrderState.REJECTED)
    })
})