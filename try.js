const GetAccessToken = require('./serivice_impl/tencent/AccessToken')

GetAccessToken()
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})