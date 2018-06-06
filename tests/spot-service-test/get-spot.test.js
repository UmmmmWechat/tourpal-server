const expect = require('chai').expect
const SpotDAO = require('../../daostub/spot/spot')
const Spot = require('../../entity/Spot')

let location = {
    province: '江苏省',
    city: '南京市',
    region: '栖霞区'
}
let keyword = 'keyword'

describe('', function () {
    this.timeout(0)

    before(async function () {
        for (let i = 0; i < 10; i++) {
            let spot = new Spot()
            spot.id = i
            spot.location = location
            spot.introduction = i + keyword + i
            await SpotDAO.insert(spot)
        }
    })


    it('根据关键词和城市', async function () {
        const GetByKeywordAndCity = require('../../serivice_impl/spot/GetSpotsByKeyword')
        let res = await GetByKeywordAndCity(keyword, location.city, 0)
        expect(res).to.has.length(10)
        for (let i = 0; i < 10; i++) {
            expect(res[i].introduction).to.include(keyword)
        }
    })


    it('根据id查找', async function () {
        const GetById = require('../../serivice_impl/spot/GetSpotById')
        let res = await GetById(1)
        expect(res).not.be.undefined
        expect(res.id).to.be.equal(1)
    })

    it('根据地址查找', async function () {
        const GetByLocation = require('../../serivice_impl/spot/GetSpotsByLocation')
        let res = await GetByLocation(location, 0)
        expect(res).to.has.length(10)
        for (let i = 0; i < 10; i++) {
            expect(res[i].location).to.be.equal(location)
        }
    })


})