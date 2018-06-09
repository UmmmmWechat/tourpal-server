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


let update = function () {
    let sql = `update spot set popularity=90*rand(), recommendLevel=5*rand()`
    return query(sql)
}

update()