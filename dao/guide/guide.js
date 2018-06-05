const query = require("../database")

let insert = function (guide) {
    return new Promise((resolve, reject) => {
        let sql = "insert into guide (avatar, gender, idCard, introduction, openId, phone, realName, wechat) values (?, ?, ?, ?, ?, ?, ?, ?)"

        query(sql, [guide.avatar, guide.gender, guide.idCard, guide.introduction, guide.openId, guide.phone, guide.realName, guide.wechat])
            .then(async res => {
                let id = res.insertId;
                let favorSpots = guide.favorSpots;
                for (let i = 0; i < favorSpots.length; i++) {
                    sql = "insert into guide_favor_spot (guideId, spotId) values (?, ?)"
                    await query(sql, [id, favorSpots[i]])
                        .then()
                        .catch(err => reject(err))
                }
                resolve(res)
            })
            .catch(err => reject(err))
    })
}

let update = function (guide) {
    return new Promise((resolve, reject) => {
        let sql = "update guide set avatar=?, introduction=?, phone=?, wechat=?, goodFeedbackRate=?, numOfFinishOrder=? where id=?"

        query(sql, [guide.avatar, guide.introduction, guide.phone, guide.wechat, guide.goodFeedbackRate, guide.numOfFinishOrder, guide.id])
            .then(async res => {
                sql = "delete from guide_favor_spot where guideId=?"
                query(sql, [guide.id])
                    .then(async res => {
                        let favorSpots = guide.favorSpots;
                        for (let i = 0; i < favorSpots.length; i++) {
                            sql = "insert into guide_favor_spot (guideId, spotId) values (?, ?)"
                            await query(sql, [guide.id, favorSpots[i]])
                                .then()
                                .catch(err => reject(err))
                        }
                    })
                    .catch(err => reject(err))

                resolve(res)
            })
            .catch(err => reject(err))
    });
}

let find = function (sql) {
    return new Promise((resolve, reject) => {
        query(sql)
            .then(async (res) => {
                let guides = []

                for (let i = 0; i < res.length; i++) {
                    let guide = res[i];
                    let guideId = guide.id;

                    sql = "select * from guide_favor_spot where guideId=?"
                    await query(sql, guideId)
                        .then(res => {
                            let favorSpots = []

                            for (let i = 0; i < res.length; i++) {
                                favorSpots.push(res[i].spotId)
                            }

                            guide.favorSpots = favorSpots;
                        })
                        .catch(err => reject(err))

                    guides.push(guide)
                }

                resolve(guides)
            })
            .catch(err => reject(err))
    })
}

let findById = function (id) {
    let sql = "select * from guide where id=" + id
    return find(sql)
}

let findByOpenId = function (openId) {
    let sql = "select * from guide where openId='" + openId + "'"
    return find(sql)
}

let findByFavorSpot = function (spotId) {
    let sql = "select * from guide where exists (select * from guide_favor_spot where guide_favor_spot.guideId=guide.id and spotId=" + spotId + ")"
    return find(sql)
}

let findByKeyword = function (keyword) {
    let sql = "select * from guide where realName like '%" + keyword + "%' or introduction like '%" + keyword + "%'"
    return find(sql)
}

module.exports = {insert, update, findById, findByOpenId, findByFavorSpot, findByKeyword}