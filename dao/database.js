let mysql = require('mysql')

var pool = mysql.createPool({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'wxa3dd150b667dff82',
    database: 'tourpal',
});

let query = function (sql, values) {

    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err)
                resolve(err)
            else {
                connection.query(sql, values, (err, rows) => {
                    if (err)
                        reject(err)
                    else
                        resolve(rows)
                    connection.release()
                })
            }
        })
    })
}

module.exports = query