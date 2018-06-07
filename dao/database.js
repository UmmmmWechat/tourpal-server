let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: '970603',
    // password: '123456',
    database: 'tourpal',
})

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

let tourist = `create table if not exists tourist (
    id integer not null auto_increment, 
    openId varchar(255), 
    primary key (id))
    default charset=utf8;`

let spot = `create table if not exists spot (
    id integer not null auto_increment, 
    introduction longtext, 
    name varchar(255), 
    pictureUrl varchar(255), 
    popularity integer not null, 
    recommendLevel integer not null, 
    primary key (id))
    default charset=utf8;`

let location = `create table if not exists location (
    spotId integer not null, 
    city varchar(255), 
    province varchar(255), 
    region varchar(255))
    default charset=utf8;`

let guide = `create table if not exists guide (
    id integer not null auto_increment, 
    avatar varchar(255), 
    gender varchar(255) not null, 
    goodFeedbackRate integer not null, 
    idCard varchar(255), 
    introduction varchar(255), 
    numOfFinishOrder integer not null, 
    openId varchar(255), 
    phone varchar(255), 
    realName varchar(255), 
    wechat varchar(255), 
    primary key (id)) 
    default charset=utf8;`

let guide_favor_spot = `create table if not exists guide_favor_spot (
    guideId integer not null, 
    spotId integer) 
    default charset=utf8;`

let order = `create table if not exists my_order (
    id integer not null auto_increment, 
    cancelReason varchar(255), 
    generatedDate datetime, 
    guideId integer not null, 
    message varchar(255), 
    spotId integer not null, 
    state varchar(255), 
    touristId integer not null, 
    travelDate datetime, 
    primary key (id))
    default charset=utf8;`

let order_feedback = `create table if not exists order_feedback (
    orderId integer not null,
    guidePoint integer not null, 
    spotPoint integer not null, 
    comment longtext)
    default charset=utf8;`

let message = `create table if not exists message (
    id integer not null auto_increment, 
    orderId integer not null,
    formId varchar(255),
    createDate datetime default now(),
    primary key (id))
    default charset=utf8;`

let createTable = function (sql) {
    query(sql, [])
}

createTable(tourist)
createTable(spot)
createTable(location)
createTable(order)
createTable(order_feedback)
createTable(guide)
createTable(guide_favor_spot)
createTable(message)

module.exports = query