const spotDAO = require('../../dao/spot/spot')
const ResultMessage = require('../../utils/ResultMessage')


module.exports = function (spotId) {
    return new Promise((resolve, reject) => {
        spotDAO.findById(spotId)
        .then(res => {
            res = res[0]
            if (res) {
                resolve(res)
            } else {
                reject(ResultMessage.NOT_FOUND)
            }         
        })
        .catch(err => {
            reject(err)
        })
    })
}