const Guide = require('../../entity/Guide')
const ResultMessage = require('../../utils/ResultMessage')


var GuideDAO = function () {
    this.db = []
}
let insert = function (guide) {
    //return query(sql, guide);
    let that = this
    return new Promise((resolve, reject) => {
        var thisGuide = JSON.parse(JSON.stringify(guide))
        that.db.push(guide)
        resolve(ResultMessage.SUCCESS)
    })
}

let update = function (guide) {
    let that = this
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < that.db.length; i++) {
                let thisGuide = that.db[i]
                if (thisGuide.id === guide.id) {
                    Object.assign(thisGuide, guide)
                    resolve(ResultMessage.SUCCESS)
                }
            }
            reject(ResultMessage.NOT_FOUND)
        }, 1000)
    })
}

let findByOpenId = function (openId) {
    let that = this
    return new Promise((resolve, reject) => {
        let results = []
        setTimeout(() => {
            for (let i = 0; i < that.db.length; i++) {
                let guide = that.db[i]
                if (guide.openId === openId) {
                    results.push(guide)
                }
            }
            resolve(results)
        }, 1000)
    })
}

let findById = function (id) {
    let that = this
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < that.db.length; i++) {
            let guide = that.db[i]
            if (guide.id === id) {
                results.push(guide)
            }
        }
        resolve(results)
    })
}

let findByFavorSpot = function (spotId) {
    let that = this
    return new Promise((resolve, reject) => {
        var results = []
        for (let i = 0; i < that.db.length; i++) {
            let guide = that.db[i]
            let favorSpots = guide.favorSpots
            for (let j = 0; j < favorSpots.length; j++) {
                if (favorSpots[j] === spotId) {
                    results.push(guide)
                    break
                }
            }
        }
        resolve(results)
    })
}

let findByKeyword = function (keyword) {
    let that = this
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < that.db.length; i++) {
            let guide = that.db[i]
            if (guide.realName.indexOf(keyword) !== -1 ||
                guide.introduction.indexOf(keyword) !== -1) {
                results.push(guide)
            }
        }
        resolve(results)
    })
}

GuideDAO.prototype.insert = insert
GuideDAO.prototype.update = update
GuideDAO.prototype.findById = findById
GuideDAO.prototype.findByOpenId = findByOpenId
GuideDAO.prototype.findByFavorSpot = findByFavorSpot
GuideDAO.prototype.findByKeyword = findByKeyword

GuideDAO.getInstance = function () {
    if (!this.instance) {
        this.instance = new GuideDAO()
    }
    return this.instance
}

module.exports = GuideDAO.getInstance()