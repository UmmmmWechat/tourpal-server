const CommendOrder = require('./serivice_impl/tourist/CommendOrderById')
const Order = require('./entity/Order')
const Feedback = require('./entity/Feedback')

var fn = async () => {
    try {
        let result = await CommendOrder('orderId', new Feedback())
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
fn()