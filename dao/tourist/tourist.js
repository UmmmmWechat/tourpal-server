const query = require("../database")

let insert = function (tourist) {
    let sql = "insert into tourist (openId) values (?)"
    return query(sql, [tourist.openId])
}

let findById = function (id) {
    let sql = "select * from tourist where id=?";
    return query(sql, [id])
}

let findByOpenId = function (openId) {
    let sql = "select * from tourist where openId=?";
    return query(sql, [openId])
}

module.exports = {insert, findById, findByOpenId}