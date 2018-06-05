const Spot = require('../../entity/Spot')
let mock = () => {
    let spot = new Spot()
    return spot
}
let update = function (guide) {
    return new Promise((resolve, reject) => {
        resolve('SUCCESS')
    })
}

let findById = function (id) {
    return new Promise((resolve, reject) => {
        resolve(mock())
    })
}

let findByProvinceAndCity = function (province, city) {
    return new Promise((resolve, reject) => {
    })
}

let findByKeyword = function (keyword) {
    return new Promise((resolve, reject) => {
    })
}

let findByCityAndKeyword = function (city, keyword) {
    return new Promise((resolve, reject) => {
    })
}

module.exports = {update, findById, findByProvinceAndCity, findByKeyword, findByCityAndKeyword}

