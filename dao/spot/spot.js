const query = require("../database")

let insert = function (spot) {
    return new Promise((resolve, reject) => {
        let sql = "insert into spot (introduction, name, pictureUrl, popularity, recommendLevel) values (?, ?, ?, ?, ?)"

        query(sql, [spot.introduction, spot.name, spot.pictureUrl, spot.popularity, spot.recommendLevel])
            .then(async res => {
                let id = res.insertId;
                let location = spot.location

                sql = "insert into location values (?, ?, ?, ?)"
                await query(sql, [id, location.province, location.city, location.region])
                    .then()
                    .catch(err => reject(err))

                resolve(res)
            }).catch(err => reject(err))
    })
}

let update = function (spot) {
    let sql = "update spot set popularity=?, recommendLevel=? where id=?";
    return query(sql, [spot.popularity, spot.recommendLevel, spot.id])
}

let find = function (sql) {
    return new Promise((resolve, reject) => {
        query(sql)
            .then(async res => {
                let spots = []

                for (let i = 0; i < res.length; i++) {
                    let spot = res[i];

                    sql = "select * from location where spotId=?"
                    await query(sql, [spot.id])
                        .then(res => {
                            let location = res[0]
                            spot.location = {province: location.province, city: location.city, region: location.region}
                        })
                        .catch(err => reject(err))
                }

                resolve(spots)
            })
            .catch(err => reject(err))
    })
}


let findById = function (id) {
    let sql = "select * from spot where id=" + id;
    return find(sql)
}

let findByProvinceAndCity = function (province, city) {
    let sql = "select * from spot where province='" + province + "' and city='" + city + "'"
    return find(sql)
}

let findByKeyword = function (keyword) {
    let sql = "select * from spot where name like '%" + keyword + "%' or introduction like '%" + keyword + "%'"
    return find(sql)
}

let findByCityAndKeyword = function (city, keyword) {
    let sql = "select * from spot where city='" + city + "' and (name like '%" + keyword + "%' or introduction like '%" + keyword + "%')"
    return find(sql)
}

module.exports = {insert, update, findById, findByProvinceAndCity, findByKeyword, findByCityAndKeyword}

