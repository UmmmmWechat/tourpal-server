// const appid = require('./serivice_impl/index/OpenId')
const ByCache = require('./serivice_impl/CommonGetArrayByCache')

// appid('033yCUwf2Q28xC0bmhyf20oHwf2yCUw2')


var result;
var fn = async function () {
    ByCache(
        'key',
        0,
        2,
        undefined,
        (res) => {
            result = res
            console.log(res)
        },
       () => new Promise(resolve =>{
           setTimeout(
               () => resolve('rerere'),
               2000
           )
       })
    )
}

fn()
