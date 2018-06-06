let expect = require('chai').expect
const Feedback = require('../../entity/Feedback')

const GuideDAO = require('../../daostub/guide/guide')
const OrderDAO = require('../../daostub/order/order')
const SpotDAO = require('../../daostub/spot/spot')

const Guide = require('../../entity/Guide')
const Order = require('../../entity/Order')
const Spot = require('../../entity/Spot')

let keyword = 'keyword'
let realName = 'realName'
let spotId = 'spotId'
let guideId = 'guideId'
let touristId = 'touristId'
let state = 'state'
let feedback = new Feedback()
let guidePoint = 4
let spotPoint = 4
feedback.comment = 'comment'
feedback.guidePoint = guidePoint
feedback.spotPoint = spotPoint


let size = 3
before(async function () {
    for (let i = 0; i < size; i++) {
        let guide = new Guide()
        guide.realName = realName + i
        guide.id = guideId
        guide.favorSpots.push(spotId)
        await GuideDAO.insert(guide)
    }
})

describe('按照关键词查找向导', function () {
    this.timeout(0)
    const GetGuidesByKeyword = require('../../serivice_impl/tourist/GetGuidesByKeyword')
    it('拿到3个', async function () {
        let res = await GetGuidesByKeyword(realName, 0)
        expect(res.length).to.equal(size).and
        for (let i = 0; i < size; i++) {
            expect(res[i].realName).include(realName)
        }
    })

    it('拿到1个', async function () {
        let res = await GetGuidesByKeyword(realName, size - 1)
        expect(res.length).to.equal(1).and
        for (let i = 0; i < 1; i++) {
            expect(res[i].realName).include(realName)
        }
    })

    it('拿不到', async function () {
        let res = await GetGuidesByKeyword('badkeyword', 0)
        expect(res).to.be.empty
    })

})

describe('根据景点id查询向导', function () {
    this.timeout(0)
    const GetGuidesBySpotId = require('../../serivice_impl/tourist/GetGuidesBySpotId')
    it('拿到3个', async function () {
        let res = await GetGuidesBySpotId(spotId, 0)
        expect(res.length).to.equal(size).and
        for (let i = 0; i < size; i++) {
            expect(res[i].favorSpots).include(spotId)
        }
    })

    it('拿到1个', async function () {
        let res = await GetGuidesBySpotId(spotId, size - 1)
        expect(res.length).to.equal(1).and
        for (let i = 0; i < 1; i++) {
            expect(res[i].favorSpots).include(spotId)
        }
    })

    it('拿不到', async function () {
        let res = await GetGuidesBySpotId('badSpotId', 0)
        expect(res).to.be.empty
    })
})

describe('面向游客的根据状态查询订单', function () {
    this.timeout(0)
    before(async function () {
        for (let i = 0; i < size; i++) {
            let order = new Order()
            order.state = state
            order.touristId = touristId
            await OrderDAO.insert(order)
        }
    })
    const GetOrdersByState = require('../../serivice_impl/tourist/GetOrdersByState')
    it('查到3个', async function () {
        let res = await GetOrdersByState(touristId, state, 0)
        expect(res.length).to.equal(size)
        for (let i = 0; i < size; i++) {
            expect(res[i].state).to.equal(state)
        }
    })
})
