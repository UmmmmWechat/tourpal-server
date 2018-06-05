const Guide = require('../../entity/Guide')
const ResultMessage = require('../../utils/ResultMessage')

let mock = function () {
    return new Promise((resolve, reject) => {
        var list = []
        for (let i = 0; i < 10; i++) {
            let guide = new Guide()
            guide.id = i
            guide.realName = 'realName' + i
            list.push(guide)
        }
        setTimeout(
            () => {
                resolve(list)
            },
            2000
        )
    })
}

let insert = function (guide) {
    let sql = 'insert into guide () values';
    //return query(sql, guide);
    return new Promise((resolve, reject) => {
    })
}

let update = function (guide) {
    console.log('updating guide')
    return new Promise((resolve, reject) => {
        setTimeout (
            // () => resolve(ResultMessage.SUCCESS),
            () => resolve('MY_ERROR'),
            1000
        )
    })
}

let findByOpenId = function (openId) {
    return new Promise((resolve, reject) => {
        resolve(new Guide())
    })
}

let findById = function (id) {
    return new Promise((resolve, reject) => {
        resolve(new Guide())
    })
}

let findByFavorSpot = function (spotId) {
    return new Promise((resolve, reject) => {
    })
}

let findByKeyword = function (keyword) {
    return mock()
}


module.exports = {
    insert,
    update,
    findById, 
    findByOpenId, 
    findByFavorSpot, 
    findByKeyword
}