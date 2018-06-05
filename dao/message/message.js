const query = require("../database")

let insert = function (message) {
    let sql = "insert into message (orderId, formId, createDate) values (?, ?, ?)"

    return query(sql, [message.orderId, message.formId, message.createDate])
}

let findByOrderId = function (orderId) {
    let sql = "select * from message where orderId=?"

    return query(sql, [orderId])
}

let removeById = function (id) {
    let sql = "delete from message where id=?"

    return query(sql, [id])
}

module.exports = {insert, findByOrderId, removeById}
