const query = require('../database')

let insert = function (order) {
    return new Promise((resolve, reject) => {
    })
}

let update = function (order) {
    return new Promise((resolve, reject) => {
    })
}

let findById = function (id) {
    return new Promise((resolve, reject) => {
    })
}

let findByGuideId = function (guideId) {
    return new Promise((resolve, reject) => {
    })
}

let findByGuideIdAndState = function (guideId, state) {
    return new Promise((resolve, reject) => {
    })
}

let findByGuideIdAndKeyword = function (guideId, keyword) {
    return new Promise((resolve, reject) => {
    })
}

let findByTouristId = function (touristId) {
    return new Promise((resolve, reject) => {
    })
}

let findByTouristIdAndState = function (touristId, state) {
    return new Promise((resolve, reject) => {
    })
}

let findByTouristAndKeyword = function (touristId, keyword) {
    return new Promise((resolve, reject) => {
    })
}

module.exports = {
    findById,
    findByGuideId,
    findByGuideIdAndState,
    findByGuideIdAndKeyword,
    findByTouristId,
    findByTouristIdAndState,
    findByTouristAndKeyword
}