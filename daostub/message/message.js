let insert = (form) => {
    return new Promise((resolve, reject) => {
        resolve('SUCCESS')
    })
}

let findByOrderId = (orderId) => {
    return new Promise((resolve, reject) => {
        resolve({formId: 'formId'})
    })
}

let removeById = (id) => {
    return new Promise((resolve, reject) => {
        resolve('SUCCESS')
    })
}

module.exports = {
    insert,
    findByOrderId,
    removeById
}