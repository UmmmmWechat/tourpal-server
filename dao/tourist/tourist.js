const query = require("../database")

let insert = function (tourist) {
    let sql = "insert into tourist (openId, name, wechat, idCard, age) values (?, ?, ?, ?, ?)";
    return query(sql, [tourist.openId, tourist.name, tourist.wechat, tourist.idCard, tourist.age]);
}

let update = function (tourist) {
    let sql = "update tourist set";

    for (let key in tourist) {
        if (tourist[key]) {
            sql += `${key}='${tourist[key]}',`
        }
    }

    sql = `${sql.slice(0, sql.length - 1)} where id= ?`;
    return query(sql, [tourist.id])
}

let findById = function (id) {
    let sql = "select * from tourist where id=?"
    return query(sql, [id])
}

let findByOpenId = function (openId) {
    let sql = "select * from tourist where openId=?"
    return query(sql, [openId])
}

module.exports = {insert, update, findById, findByOpenId}
