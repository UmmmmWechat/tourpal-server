const Spot = require('../../entity/Spot')


var SpotDAO = function () {
    this.db = []
}


SpotDAO.prototype.insert = function (spot) {
    let that = this
    return new Promise((resolve, reject) => {
        that.db.push(spot)
        resolve('SUCCESS')
    })
}

SpotDAO.prototype.update = function (spot) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < this.db.length; i++) {
            let thisSpot = this.db[i]
            if(thisSpot.id === spot.id) {
                Object.assign(thisSpot, spot)
                resolve('SUCCESS')
            }
        }
        reject("NOT_FOUND")
    })
}

SpotDAO.prototype.findById = function (id) {
    let that = this
    let results = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < that.db.length; i++) {
            if (that.db[i].id === id)  {
                results.push(this.db[i])
            }
        }
        resolve(results)
    })
}

SpotDAO.prototype.findByProvinceAndCity = function (province, city) {
    let that = this
    let results = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < that.db.length; i++) {
            let spot = that.db[i]
            if (spot.location.province === province &&
            spot.location.city === city) {
                results.push(spot)
            }
        }
        resolve(results)
    })
}

SpotDAO.prototype.findByKeyword = function (keyword) {
    let that = this
    let results = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < that.db.length; i++) {
            let spot = tthathis.db[i]
            if (spot.name.indexOf(keyword) !== -1) {
                results.push(spot)
            }
        }
        resolve(results)
    })
}

SpotDAO.prototype.findByCityAndKeyword = function (city, keyword) {
    let that = this
    let results = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < that.db.length; i++) {
            let spot = that.db[i]
            if ((spot.name.indexOf(keyword) !== -1 || spot.introduction.indexOf(keyword) !== -1)
                && spot.location.city === city) {
                results.push(spot)
            }
        }
        resolve(results)
    })
}

SpotDAO.getInstance = function () {
    if (!this.instance) {
        this.instance = new SpotDAO()
    } return this.instance
}

module.exports = SpotDAO.getInstance()