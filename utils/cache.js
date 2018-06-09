// key的命名规则一般为  种类（spot,guide...） + 其他查询条件

const ResultMessage = require('./ResultMessage')

const MAX_DELT = 3 * 60 * 1000
const INTERVAL = 60 * 1000

function Data (value) {
    if (typeof(value) === Object || typeof(value) === Array) {
        this.value = JSON.parse(JSON.stringify(value))  // 利用 JSON进行深copy
    } else {
        this.value = value
    }
    this.startTime = new Date().getTime()   // 资源进入cache的时间
    this.maxDelt = MAX_DELT
}

var Cache = function() {
    this.instance = undefined
    this.resourceMap = {}
    this.intervalId = undefined
    // this.clearCacheLoop = function () {
    //     this.intervalId = setInterval(
    //         () => {
    //             console.info('-----------------------')
    //             console.info('Start to clear cache...')
    //             let now = new Date().getTime()
    //             for (let key in this.resourceMap) {
    //                 let data = this.resourceMap[key]
    //                 // 资源不存在了
    //                 if (data === undefined) {
    //                     continue;
    //                 }
    //                 let delt = now - data.startTime
    //                 // 超时清空
    //                 if (delt >= MAX_DELT) {
    //                     console.info('clear resource:' + key )
    //                     this.resourceMap[key] = undefined
    //                 } else {
    //                     console.info('remain resource:' + key )
    //                 }
    //             }
    //         },
    //         INTERVAL
    //     )
    // }
    // this.init = function () {
    //     console.info('--------------------')
    //     console.info('init cache')
    //     this.resourceMap = {}
    //     if (this.intervalId !== undefined) {
    //         clearInterval(this.intervalId)
    //         this.intervalId = undefined
    //     }
    //     this.clearCacheLoop()
    //     console.info('--------------------')
    // }
    // this.getResource = function (key) {
    //     return new Promise(
    //         (resolve, reject) => {
    //             var data = this.resourceMap[key]
    //             if (data !== undefined) {
    //                 resolve(data.value)
    //             } else {
    //                 reject('资源不存在，请重新获取')
    //             }
    //         }
    //     )
    // }
    // this.setResource = function (key, value) {
    //     let data = new Data(value)
    //     this.resourceMap[key] = data
    //     console.info('------------------')
    //     console.info('Resource: ' + key + ' set')
    //     console.info('------------------')
    // }
}
Cache.prototype.init = function () {
    console.info('--------------------')
    console.info('init cache')
    this.resourceMap = {}
    if (this.intervalId !== undefined) {
        clearInterval(this.intervalId)
        this.intervalId = undefined
    }
    this.clearCacheLoop()
    console.info('--------------------')
}
Cache.prototype.clearCacheLoop = function () {
    this.intervalId = setInterval(
        () => {
            console.info('-----------------------')
            console.info('Start to clear cache...')
            let now = new Date().getTime()
            for (let key in this.resourceMap) {
                let data = this.resourceMap[key]
                // 资源不存在了
                if (data === undefined) {
                    continue;
                }
                let delt = now - data.startTime
                // 超时清空
                if (delt >= data.maxDelt) {
                    console.info('clear resource:' + key )
                    console.info(`Resource ${key}'s maxDelt is ${data.maxDelt / 1000} seconds`)
                    this.resourceMap[key] = undefined
                } else {
                    console.info('remain resource:' + key )
                }
            }
        },
        INTERVAL
    )
}
Cache.prototype.getResource = function (key) {
    return new Promise(
        (resolve, reject) => {
            var data = this.resourceMap[key]
            if (data !== undefined) {
                console.info(new Date().toLocaleTimeString())
                console.info('cache命中' + key)
                resolve(data.value)
            } else {
                console.info(new Date().toLocaleTimeString())
                console.info('资源' + key + '不存在，请重新获取')
                reject(ResultMessage.NOT_FOUND)
            }
        }
    )
}
Cache.prototype.setResource = function (key, value, maxDelt) {
    let data = new Data(value)
    if (maxDelt) {
        data.maxDelt = maxDelt
    }
    this.resourceMap[key] = data
    console.info('------------------')
    console.info(new Date().toLocaleTimeString())
    console.info('Resource: ' + key + ' set')
    console.info('------------------')
}

Cache.prototype.removeResource = function (key) {
    console.log('-------------')
    console.log('clear resource', key)
    this.resourceMap[key] = undefined
}


Cache.getInstance = function () {
    if (this.instance === undefined) {
        this.instance = new Cache()
        this.instance.init()
    }
    return this.instance
}

module.exports = Cache.getInstance()