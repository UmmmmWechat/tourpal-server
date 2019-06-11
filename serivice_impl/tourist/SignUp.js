const config = require('../../config')
const TouristDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/tourist/tourist`)

module.exports = async (tourist) => {
    try {
        let nowYear = new Date().getFullYear();
        let touristYear = parseInt(tourist.idCard.substr(6, 4));
        tourist.age = nowYear - touristYear;
        await TouristDAO.update(tourist);
    } catch (e) {
        throw e
    }
};