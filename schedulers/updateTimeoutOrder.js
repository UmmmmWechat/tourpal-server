const query = require('../dao/database')
const orderState = require('../utils/OrderState')

setInterval(() => {
    console.log("updateTimeoutOrder");
    let sql = `update my_order set state= '${orderState.TIMEOUT}' where state= '${orderState.WAITING}' and travelDate < now()`;
    query(sql);
}, 3 * 60 * 1000);

