const cache = require('../utils/cache')
var sliceArray = function (list, start, end) {
    if (end > list.length) {
        end = list.length
    }
    return list.slice(start, end)
}
/**
 * 
 * @param {*} key cache中的key
 * @param {*} start 数据 从哪里开始
 * @param {*} end 数据结束
 * @param {*} sortBy 需要以哪种方式排序
 * @param {*} onCacheSuccess 成功从cache获取时的回调
 * @param {*} onCacheFail 失败时的回调
 */
module.exports = (key, start, end, sortBy ,onCacheSuccess, onCacheFail) => {
    cache.getResource(key)
    .then(res => {  // 获取cache中资源成功
        // 这里不用sort，因为放在cache中，已经是排序过放进去的了
        res = sliceArray(res, start, end)
        onCacheSuccess(res)
    })
    .catch(err => {
        onCacheFail((data) => { // 如果不在cache中，则做其他事，最后将data传过来存在cache中
            if (sortBy) {
                data = data.sort(sortBy)
            }
            cache.setResource(key, data)
            // 继续成功回调
            data = sliceArray(data, start, end)
            onCacheSuccess(data)
        })
    })
}