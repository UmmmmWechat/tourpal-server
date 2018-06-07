const config = require('../../config')
const spotDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/spot/spot`)
const ResultMessage = require('../../utils/ResultMessage')

module.exports = async function (spotId) {
    try {
        let res = await spotDAO.findById(spotId)
        console.log(res)
        res = res[0]
        if (res) {
            return res
        } else {
            throw new Error(ResultMessage.NOT_FOUND)
        }
    } catch (err) {
        throw err
    }
}