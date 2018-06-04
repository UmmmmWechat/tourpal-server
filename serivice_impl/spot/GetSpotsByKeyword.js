const spotDAO = require('../../dao/spot/spot')
const SpotSortBy = require('./SpotSort')
const CommonGetByCache = require('../CommonGetArrayByCache')
const PAGE_SIZE = require('./SpotConst').PAGE_SIZE
const ResultMessage = require('../../utils/ResultMessage')


module.exports = function (keyword, city, lastIndex) {
    return new Promise((resolve, reject) => {
        let key = 'spot' + keyword + city
        CommonGetByCache(
            key,
            lastIndex,
            lastIndex + PAGE_SIZE,
            SpotSortBy,
            (res) => {  // res是查到的数据
                resolve(res)
            },
            () => spotDAO.findByCityAndKeyword(city, keyword)
            // callback => { // cache中不存在资源
            //     spotDAO.findByCityAndKeyword(city, keyword)
            //     .then(res => {
            //         if (res.length === 0) { // 如果查询结果为空，直接返回了，不要存在cache了
            //             resolve(res)
            //         } else {
            //             // 将数据传回去在那边做 进入 cache的操作， 完成后那边会 调成功
            //             callback(res)
            //         } 
            //     })
            //     .catch(err => { // 数据层数据出错
            //         console.log(err)
            //         reject(ResultMessage.ERROR_DATABASE)
            //     })
            // }
        )
    })
}