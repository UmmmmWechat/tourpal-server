const spotDAO = require('../../dao/spot/spot')
const ResultMessage = require('../../utils/ResultMessage')

module.exports = async function (spotId) {
    try {
        let res = await spotDAO.findById(spotId)
        res = res[0]
        if (res) {
            return res
        } else {
            throw new Error(ResultMessage.ERROR_DATABASE)
        }
    } catch (err) {
        throw err
    }
}