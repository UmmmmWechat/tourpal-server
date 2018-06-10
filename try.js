// let a = ''
//
// try {
//     throw new Error('dkkd')
// } catch (error) {
//     console.log(error.message)
// }

const spotDao = require('./dao/spot/spot')

const fs = require('./spotszz')

for (let i = 0; i < fs.length; i++) {
    let spot = fs[i]
    spot.location = {
        province: '河南省',
        city: '郑州市',
        region: ''
    }
    spotDao.insert(spot).then(res => {
    }).catch(err => {})
}