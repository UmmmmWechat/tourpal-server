const query = require('../database')
const Tourist = require('../../entity/Tourist')

let insert = function (tourist) {
    return new Promise((resolve, reject) => {
    })
}

let findById = function (id) {
    return new Promise((resolve, reject) => {
    })
}

let findByOpenId = function (openId) {
    return new Promise((resolve, reject) => {
        resolve(new Tourist())
    })
}

module.exports = {findById, findByOpenId}