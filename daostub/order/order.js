const Order = require('../../entity/Order')
let insert = function (order) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve('SUCCESS')
            },
            1000
        )
    })
}

let update = function (order) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve('SUCCESS')
            },
            1000
        )
    })
}

let findById = function (id) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve([new Order()]),
            1000
        )
    })
}

let findByGuideId = function (guideId) {
    return new Promise((resolve, reject) => {
        let result = []
        for (let i = 0; i < 10; i++) {
            result.push(new Order())
        }
        setTimeout(
            () => resolve(result),
            1000
        )
    })
}

let findByGuideIdAndState = function (guideId, state) {
    return new Promise((resolve, reject) => {
        let result = []
        for (let i = 0; i < 10; i++) {
            result.push(new Order())
        }
        setTimeout(
            () => resolve(result),
            1000
        )
    })
}

let findByGuideIdAndKeyword = function (guideId, keyword) {
    return new Promise((resolve, reject) => {
        let result = []
        for (let i = 0; i < 10; i++) {
            result.push(new Order())
        }
        setTimeout(
            () => resolve(result),
            1000
        )
    })
}

let findByTouristId = function (touristId) {
    return new Promise((resolve, reject) => {
        let result = []
        for (let i = 0; i < 10; i++) {
            result.push(new Order())
        }
        setTimeout(
            () => resolve(result),
            1000
        )
    })
}

let findByTouristIdAndState = function (touristId, state) {
    return new Promise((resolve, reject) => {
        let result = []
        for (let i = 0; i < 10; i++) {
            result.push(new Order())
        }
        setTimeout(
            () => resolve(result),
            1000
        )
    })
}

let findByTouristAndKeyword = function (touristId, keyword) {
    return new Promise((resolve, reject) => {
        let result = []
        for (let i = 0; i < 10; i++) {
            result.push(new Order())
        }
        setTimeout(
            () => resolve(result),
            1000
        )
    })
}

module.exports = {
    update,
    insert,
    findById,
    findByGuideId,
    findByGuideIdAndState,
    findByGuideIdAndKeyword,
    findByTouristId,
    findByTouristIdAndState,
    findByTouristAndKeyword
}