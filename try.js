const getOpenId = require('./serivice_impl/tencent/OpenId')

var fn = async () => {
   getOpenId('0334syKn08uROs1ST7Ln0DKpKn04syKV')
   .then(res => {
       console.log(res)
   })
   .catch(err => {
       console.log(err)
   })
}

fn()