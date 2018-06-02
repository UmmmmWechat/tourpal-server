const spotDAO = require('../../dao/spot/spot')

module.exports = async function (location, lastIndex) {
    spotDAO.findByProvinceAndCity(location.province, location.city)
}