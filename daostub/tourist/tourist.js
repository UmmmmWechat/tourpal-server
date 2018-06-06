const Tourist = require('../../entity/Tourist')

var db = []
let insert = function (tourist) {
    return new Promise((resolve, reject) => {
        db.push(tourist)
        setTimeout (
            () => resolve('SUCCESS'),
            1000
        )
    })
}

let findById = function (id) {
    return new Promise((resolve, reject) => {
        let results = []
        setTimeout(() => {
            for (let i = 0; i < db.length; i++) {
                let item = db[i]
                if (item.id === id) {
                    results.push(item)
                }
            }
            resolve(results)
        }, 1000)
    })
}

let findByOpenId = function (openId) {
    return new Promise((resolve, reject) => {
        let results = []
        setTimeout(
            () => {
                for (let i = 0; i < db.length; i++) {
                    let item = db[i]
                    if (item.openId === openId) {
                        results.push(item)
                    }
                }
                resolve(results)
            },
            1000
        )
    })
}

module.exports = {
    insert,
    findById,
    findByOpenId
}