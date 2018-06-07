// const request = require('request')

// let requestData = {
//     code: '023zi1pU1WcqgW0pF9qU1M0ZoU1zi1pj'
// }

// let url = 'http://localhost:3000/login/tourist'

// request({
//     url: url,
//     method: "POST",
//     json: true,
//     headers: {
//         "content-type": "application/json",
//     },
//     body: requestData
// }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body)
//     } else {
//         console.log(error)
//     }
// }); 


// const config = require('../config')
let mysql = require('mysql')

const remoteConnection = mysql.createConnection({
    host: '111.231.99.122',
    post: 3306,
    user: 'root',
    password: '970603',
    // password: '123456',
    database: 'tourpal',
})

let localConnection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: '970603',
    // password: '123456',
    database: 'tourpal',
})

let connection = remoteConnection


connection.connect()