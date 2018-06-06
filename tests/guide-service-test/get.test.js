const expect = require('chai').expect
const OrderState = require('../../utils/OrderState')
const OrderDAO = require('../../daostub/order/order')
const Order = require('../../entity/Order')

let size = 10
let guideId = 'guideId'


describe ('根据状态获取', function () {
    this.timeout(0)
    before(async function () {
        for (let i = 0; i < size; i++) {
            let order = new Order()
            order.id = i
            order.guideId = guideId
            order.state = OrderState.WAITING
            await OrderDAO.insert(order)
        }
    })
    
    it ('获取WAITING的10个', async function () {
        const GetByState = require('../../serivice_impl/guide/GetOrdersByState')
        let res = await GetByState(guideId, OrderState.WAITING, 0)
        expect(res).to.has.length(size)
    })
    it ('获取WAITING的5个', async function () {
        const GetByState = require('../../serivice_impl/guide/GetOrdersByState')
        let res = await GetByState(guideId, OrderState.WAITING, size - 5)
        expect(res).to.has.length(5)
    })
})