const OpenId = require('../tencent/OpenId')
const TouristDAO = require('../../dao/tourist/tourist')

module.exports = async function (code) {
    return new Promise((resolve, reject) => {
        OpenId(code)
        .then(res => {

        })
        .catch(err => {

        })
    })
}