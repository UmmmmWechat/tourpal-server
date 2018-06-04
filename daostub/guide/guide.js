const Guide = require('../../entity/Guide')

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