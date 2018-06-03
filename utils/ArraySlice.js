module.exports = (list, start, end) => {
    let len = list.length
    if(end > len) {
        end = len
    }
    return list.slice(start, end)
}