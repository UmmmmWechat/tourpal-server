const query = require('../database')

let insert = function (order) {
    let sql = "insert into my_order (guideId, message, spotId, touristId, travelDate) values (?, ?, ?, ?, ?)"

    return query(sql, [order.guideId, order.message, order.spotId, order.touristId, order.travelDate])
}

let update = function (order) {
    return new Promise((resolve, reject) => {
        let sql = "update my_order set state=?, cancelReason=? where id=?"
        query(sql, [order.state, order.cancelReason, order.id])
            .then(async res => {
                let feedback = order.feedback;
                if (feedback != null) {
                    sql = "insert into order_feedback values (?, ?, ?, ?)"
                    await query(sql, [order.id, feedback.guidePoint, feedback.spotPoint, feedback.comment])
                        .then()
                        .catch(err => reject(err))
                }
                resolve(res)
            })
            .catch(err => reject(err))
    })
}

let find = function (sql) {
    return new Promise((resolve, reject) => {
        query(sql)
            .then(async res => {
                let orders = []

                for (let i = 0; i < res.length; i++) {
                    let order = res[i]
                    if (order.state === 'FINISH') {
                        sql = "select * from order_feedback where orderId=?"
                        await query(sql, [order.id])
                            .then(res => {
                                let feedback = res[0]
                                order.feedback = {
                                    spotPoint: feedback.spotPoint,
                                    guidePoint: feedback.guidePoint,
                                    comment: feedback.comment
                                }
                            })
                            .catch(err => reject(err))
                    }
                    else order.feedback = null

                    orders.push(order)
                }
                resolve(orders)
            })
            .catch(err => reject(err))
    })
}

let findById = function (id) {
    let sql = "select * from my_order where id=" + id;
    return find(sql);
}

let findByGuideId = function (guideId) {
    let sql = "select * from my_order where guideId=" + guideId;
    return find(sql);
}

let findByGuideIdAndState = function (guideId, state) {
    let sql = "select * from my_order where guideId=" + guideId + " and state='" + state + "'";
    return find(sql);
}

let findByGuideIdAndKeyword = function (guideId, keyword) {
    let sql = "select * from my_order where guideId=" + guideId + " and exists (select * from spot where spot.id=my_order.spotId and (name like '%" + keyword + "%' or introduction like '%" + keyword + "%'))";
    return find(sql);
}

let findByTouristId = function (touristId) {
    let sql = "select * from my_order where touristId=" + touristId;
    return find(sql);
}

let findByTouristIdAndState = function (touristId, state) {
    let sql = "select * from my_order where touristId=" + touristId + " and state='" + state + "'";
    return find(sql);
}

let findByTouristAndKeyword = function (touristId, keyword) {
    let sql = "select * from my_order where touristId=" + touristId + " and exists (select * from spot where spot.id=my_order.spotId and (name like '%" + keyword + "%' or introduction like '%" + keyword + "%'))";
    return find(sql);
}

module.exports = {
    insert,
    update,
    findById,
    findByGuideId,
    findByGuideIdAndState,
    findByGuideIdAndKeyword,
    findByTouristId,
    findByTouristIdAndState,
    findByTouristAndKeyword
}