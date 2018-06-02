
const cache = require('./utils/cache')

module.exports = function () {
    var list = [1,2,3,4,5,6,7,8]
    cache.setResource('list', list)


    setTimeout(
        () => {
            cache.getResource('list')
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        }, 
        2000
    )
}