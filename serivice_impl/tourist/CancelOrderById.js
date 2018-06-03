const orderDAO = require('../../dao/order/order')
const Order = require('../../entity/Order')
const OrderState = require('../../utils/OrderState')
const ResultMessage = require('../../utils/ResultMessage')
// 参数为 {int} orderId, {String} cancelMessage
module.exports = async function (orderId, cancelMessage) {
    return new Promise(
        async (resolve, reject) => {
            let order = undefined;
            order = new Order()

            await orderDAO.findById(orderId)
            .then(res => { // 查询成功
                    res = res[0]
                    if (res === undefined) {
                        reject(ResultMessage.NOT_FOUND)
                    } else {
                        Object.assign(order ,res[0])
                        order.state = OrderState.CANCELED
                        // 更新数据库
                        return orderDAO.update(order)
                    }  
                }
            )
            .then(() => { // 数据库更新成功
                resolve()
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        }
    )
}