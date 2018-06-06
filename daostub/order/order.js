const Order = require('../../entity/Order')

var OrderDAO = function () {
    this.db = []
}
OrderDAO.prototype.insert = function (order) {
    var that = this
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                that.db.push(order)
                resolve('SUCCESS')
            },
            100
        )
    })
}

OrderDAO.prototype.update = function (order) {
    var that = this
    return new Promise((resolve, reject) => {
        for (let i = 0; i < that.db.length; i++) {
            let thisOrder = that.db[i]
            if (thisOrder.id === order.id) {
                Object.assign(thisOrder, order)
                resolve('SUCCESS')
            }
        }
        reject('NOT_FOUND')
    })
}

OrderDAO.prototype.findById = function (id) {
    var that = this
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < that.db.length; i++) {
            if (that.db[i].id === id) results.push(that.db[i])
        }
        resolve(results)
    })
}

OrderDAO.prototype.findByGuideId = function (guideId) {
    var that = this
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < that.db.length; i++) {
            let order = that.db[i]
            if (order.guideId === guideId) {
                results.push(order)
            }
        }
        resolve(results)
    })
}

OrderDAO.prototype.findByGuideIdAndState = function (guideId, state) {
    var that = this
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < that.db.length; i++) {
            let order = that.db[i]
            if (order.guideId === guideId && order.state === state) {
                results.push(order)
            }
        }
        resolve(results)
    })
}

OrderDAO.prototype.findByGuideIdAndKeyword = function (guideId, keyword) {
    var that = this
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < that.db.length; i++) {
            let order = that.db[i]
            if (order.guideId === guideId) {
                results.push(order)
            }
        }
        resolve(results)
    })
}

OrderDAO.prototype.findByTouristId = function (touristId) {
    var that = this
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < that.db.length; i++) {
            let order = that.db[i]
            if (order.touristId === touristId) {
                results.push(order)
            }
        }
        resolve(results)
    })
}

OrderDAO.prototype.findByTouristIdAndState = function (touristId, state) {
    var that = this
    return new Promise((resolve, reject) => {
        let results = []
        // let order = new Order()
        // order.touristId = touristId
        // order.state = state
        // results.push(order)
        for (let i = 0; i < that.db.length; i++) {
            console.log()
            let order = that.db[i]
            if (order.touristId === touristId && order.state === state) {
                results.push(order)
            }
        }
        resolve(results)
    })
}

OrderDAO.prototype.findByTouristAndKeyword = function (touristId, keyword) {
    return new Promise((resolve, reject) => {
        let result = []
        for (let i = 0; i < 10; i++) {
            result.push(new Order())
        }
         resolve(result)
    })
}




OrderDAO.getInstance = function () {
    if (!this.instance) {
        this.instance = new OrderDAO()
    }
    return this.instance
}



module.exports = OrderDAO.getInstance()