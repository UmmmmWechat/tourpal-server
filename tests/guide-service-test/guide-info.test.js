const expect = require('chai').expect
const GuideDAO = require('../../daostub/guide/guide')
const Guide = require('../../entity/Guide')


describe('与guide信息有关的测试', function () {
    let id = 'id'
    let realName = 'realName'
    let phone = '181818'
    this.timeout(0)
    before(async function () {
        let guide = new Guide()
        guide.id = id
        guide.realName = realName
        guide.phone = phone
        await GuideDAO.insert(guide)
    })
    let guide
    it('获取信息', async function () {
        const GetInfo = require('../../serivice_impl/guide/GetInfo')
        guide = await GetInfo(id)
        expect(guide).not.to.be.undefined
        expect(guide.id).to.be.equal(id)
        expect(guide.realName).to.be.equal(realName)
    })

    it('更新信息', async function () {
        const ModifyInfo = require('../../serivice_impl/guide/ModifyGuideInfo')
        realName = 'otherName'
        phone = 'other phone'
        guide.realName = realName
        guide.phone = phone

        let res = await ModifyInfo(guide)
        expect(res).to.be.equal('SUCCESS')

        guide = await GuideDAO.findById(id)
        guide = guide[0]
        expect(guide).not.to.be.undefined
        expect(guide.realName).to.be.equal(realName)
        expect(guide.phone).to.be.equal(phone)
    })
})