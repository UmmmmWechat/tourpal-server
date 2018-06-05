const Tourist = require('../../entity/Tourist')
let insert = function (tourist) {
    return new Promise((resolve, reject) => {
        resolve('SUCCESS')
    })
}

let findById = function (id) {
    return new Promise((resolve, reject) => {
        resolve(new Tourist())
    })
}

let findByOpenId = function (openId) {
    return new Promise((resolve, reject) => {
        resolve(new Tourist())
    })
}

module.exports = {insert, findById, findByOpenId}
