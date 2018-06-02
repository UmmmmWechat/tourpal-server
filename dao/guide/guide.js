const query = require('../database')

let insert = function (guide) {
    let sql = 'insert into guide () values';
    //return query(sql, guide);
    return new Promise((resolve, reject) => {
    })
}

let update = function (guide) {
    return new Promise((resolve, reject) => {
    })
}

let findByOpenId = function (openId) {
    return new Promise((resolve, reject) => {
    })
}

let findById = function (id) {
    return new Promise((resolve, reject) => {
    })
}

let findByFavorSpot = function (spotId) {
    return new Promise((resolve, reject) => {
    })
}

let findByKeyword = function (keyword) {
    return new Promise((resolve, reject) => {
    })
}

module.exports = {findById, findByOpenId, findByFavorSpot, findByKeyword}