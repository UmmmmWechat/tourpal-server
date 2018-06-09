const cache = require('../utils/cache')
/**
 * 
 * @param {*} key cache中的key
 * @param {*} start 数据 从哪里开始
 * @param {*} end 数据结束
 * @param {*} sortBy 需要以哪种方式排序
 * @param {*} onCacheSuccess 成功从cache获取时的回调
 * @param {*} onCacheFail 失败时的回调
 */
module.exports = async (key, start, end, sortBy, onCacheSuccess, onCacheFail) => {
    let res;
    let notCacheHit
    console.log(`start:${start}, end:${end}`)
    try {
        res = await cache.getResource(key)
        res = res.slice(start, end)
        onCacheSuccess(res)
    } catch (e) {
        notCacheHit = e
    }
    // 如上一步没有命中，则下面要开始用dao找（各自实现）
    if (notCacheHit) {
        try {
            let data = await onCacheFail()
            // 如果不在cache中，则做其他事，最后将data传过来存在cache中
            if (sortBy) {
                data = data.sort(sortBy)
                for (let i in data) {
                    let value = data[i].popularity * 0.4 + data[i].recommendLevel * 60
                    console.log(data[i].name, ':' ,value)
                }
            }
            cache.setResource(key, data)
            // 继续成功回调
            data = data.slice(start, end)
            onCacheSuccess(data)
        } catch (e) {
            throw e
        }
    }
}