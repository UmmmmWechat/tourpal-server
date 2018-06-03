/*
    private int id;

    private int spotPoint;

    private int guidePoint;

    private String comment;
*/
const Order = require('../../entity/Order')
const OrderDao = require('../../dao/order/order')
const ResultMessage = require('../../utils/ResultMessage')

// 参数为 {int} orderId, {Feedback} feedback
module.exports = async function (orderId, feedback) {
    return new Promise (
        async (resolve, reject) => {
            let order = new Order()
            // 查出来 
            await OrderDao.findById(orderId)
            .then(res => {
                res = res[0]
                if (res) {
                    Object.assign(order, res)
                    order.feedback = feedback
                    return OrderDao.update(order)
                } else {
                    reject(ResultMessage.NOT_FOUND)
                }
            })
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