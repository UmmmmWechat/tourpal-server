
/**
 * 按照某种权重算法给spot排序
 * module.exports = function () {
    this.id;

    this.name;

    this.location;

    this.pictureUrl;

    this.introduction;

    this.popularity;    // 热度

    this.recommendLevel;    // 星级
}
 */
module.exports = (x, y) => {
        // 根据热度 和 星级进行排序 
        // 权重
        let weightP = 0.4
        let weightR = 0.6
        let valueX = x.popularity * weightP + x.recmmendLevel * weightR
        let valueY = y.popularity * weightP + y.recmmendLevel * weightR
        return valueX - valueY
}