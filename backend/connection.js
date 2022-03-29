const mongoose = require('mongoose')
const { mongodb } = require('./config')

const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
.then(() => {
    console.log('Nos fuimos')
}).catch( err => {
    console.log('Conexion inexitosa' + err)
})

module.exports = connection