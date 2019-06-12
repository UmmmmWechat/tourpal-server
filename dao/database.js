let mysql = require('mysql');
let path = require('path');
let fs = require('fs');

let pool = mysql.createPool({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: '123456',
    database: 'tourpal',
});

let query = function (sql, val = []) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, val, (err, res) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res)
                    }
                    connection.release()
                })
            }
        })
    })
};

let tourist = `create table if not exists tourist (
    id integer not null auto_increment, 
    openId varchar(255), 
    name varchar(255),
    wechat varchar(255),
    idCard varchar(20),
    primary key (id))
    default charset=utf8;`;

let spot = `create table if not exists spot (
    id integer not null auto_increment, 
    introduction longtext, 
    name varchar(255), 
    pictureUrl varchar(255), 
    popularity integer not null, 
    recommendLevel double not null, 
    primary key (id))
    default charset=utf8;`;

let location = `create table if not exists location (
    spotId integer not null, 
    city varchar(255), 
    province varchar(255), 
    region varchar(255))
    default charset=utf8;`;

let guide = `create table if not exists guide (
    id integer not null auto_increment, 
    avatar varchar(255), 
    gender varchar(255) not null, 
    goodFeedbackRate double not null, 
    idCard varchar(20), 
    introduction varchar(255), 
    numOfFinishOrder integer not null, 
    openId varchar(255), 
    phone varchar(255), 
    age integer,
    realName varchar(255), 
    wechat varchar(255), 
    primary key (id)) 
    default charset=utf8;`;

let guide_favor_spot = `create table if not exists guide_favor_spot (
    guideId integer not null, 
    spotId integer) 
    default charset=utf8;`;

let order = `create table if not exists my_order (
    id integer not null auto_increment, 
    cancelReason varchar(255), 
    generatedDate datetime, 
    guideId integer not null, 
    guideName varchar(255),
    message varchar(255), 
    spotId integer not null, 
    spotName varchar(255),
    state varchar(255), 
    touristId integer not null, 
    touristName varchar(255),
    travelDate datetime, 
    primary key (id))
    default charset=utf8;`;

let order_feedback = `create table if not exists order_feedback (
    orderId integer not null,
    guidePoint integer not null, 
    spotPoint integer not null, 
    comment longtext)
    default charset=utf8;`;

let message = `create table if not exists message (
    id integer not null auto_increment, 
    orderId integer not null,
    formId varchar(255),
    createDate datetime default now(),
    primary key (id))
    default charset=utf8;`;

let createTable = async function (sql) {
    await query(sql)
};

let insertSpots = async () => {
    await query("select * from spot limit 1")
        .then(res => {
                if (!res.length) {
                    let dir = 'spots';
                    let files = fs.readdirSync(path.resolve(dir));
                    let spotSql = 'insert into spot (name, introduction, pictureUrl, popularity, recommendLevel) values (?, ?, ?, ?, ?)';
                    let locationSql = 'insert into location (spotId, city) values (?, ?)';
                    files.forEach(file => {
                        let data = JSON.parse(fs.readFileSync(path.resolve(dir, file), 'utf-8'));
                        let city = data.city;
                        let spots = data.spots;
                        spots.forEach(async spot => {
                            await query(spotSql, [spot.name, spot.introduction, spot.pictureUrl, spot.popularity, spot.recommendLevel])
                                .then(result => {
                                    let id = result.insertId;
                                    query(locationSql, [id, city]);
                                });
                        })
                    })
                }
            }
        )
};

init = async () => {
    await createTable(tourist);
    await createTable(spot);
    await createTable(location);
    await createTable(order);
    await createTable(order_feedback);
    await createTable(guide);
    await createTable(guide_favor_spot);
    await createTable(message);

    await insertSpots();
};

module.exports = query;