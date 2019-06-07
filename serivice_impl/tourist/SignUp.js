const config = require('../../config')
const TouristDAO = require(`../../${config.isTest ? 'daostub' : 'dao'}/tourist/tourist`)

module.exports = async (tourist) => {
    try {
        await TouristDAO.update(tourist);
    } catch (e) {
        throw e
    }
};