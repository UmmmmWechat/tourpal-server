const spotDAO = require('../../dao/spot/spot')


module.exports = function (spotId) {
    return new Promise((resolve, reject) => {
        spotDAO.findById(spotId)
        .then(res => {
            resolve(res[0])
        })
        .catch(err => {
            reject(err)
        })
    })
}