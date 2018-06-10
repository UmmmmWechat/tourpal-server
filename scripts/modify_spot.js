let mysql = require('mysql')

let localConnection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: '970603',
    // password: '123456',
    database: 'tourpal',
})

let connection = localConnection

connection.connect()

let query = function (sql, values) {

    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err)
                reject(err)
            else
                resolve(result)
        })
    })
}

// 参考
// let update = function (spot) {
//     let sql = "update spot set popularity=?, recommendLevel=? where id=?"
//     return query(sql, [spot.popularity, spot.recommendLevel, spot.id])
// }

const select_all_spot = 'select * from spot'
let fn = async function () {
    let res = await query(select_all_spot)

    for (let i = 0; i < res.length; i++) {
        let spot = res[i]
        
        let pictureUrl = spot.pictureUrl
        pictureUrl = 'https:' + pictureUrl

        let update = `update spot set pictureUrl='${pictureUrl}' where id=${spot.id} `
        query(update)
        .then(res => {})
        .catch(err => {console.log(err)})
    }
}

fn()