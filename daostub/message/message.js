
var db = []
let insert = (form) => {
    return new Promise((resolve, reject) => {
        db.push(form)
        resolve('SUCCESS')
    })
}

let findByOrderId = (orderId) => {
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < db.length; i++) {
            let form = db[i]
            if (form.orderId === orderId) {
                results.push(form)
            }
        }
        resolve(results)
    })
}

let removeById = (id) => {
    return new Promise((resolve, reject) => {
        db.splice(
            db.findIndex(item => item.id === id),
            1
        )
        resolve('SUCCESS')
    })
}

module.exports = {
    insert,
    findByOrderId,
    removeById
}