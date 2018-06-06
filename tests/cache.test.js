const expect = require('chai').expect
const Cache = require('../utils/cache')

describe('Cache测试', function () {
    let list = [1,2,3,4]
    Cache.setResource('key', 'value')
    Cache.setResource('list', list)
    it ('get', async function () {
        let res = await Cache.getResource('key')
        expect(res).to.equal('value')
    })

    it ('get', async function () {
        let res = await Cache.getResource('list')
        expect(res).to.equal(list)
    })
})