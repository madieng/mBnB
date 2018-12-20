let express = require('express')
let config = require('./config/config')
let morgan = require('morgan')('dev')
require('./config/db')

let app = express()

app.use(morgan)

app.use(config.rootApi, require('./src/routes/index'))
app.use(config.rootApi + 'ads', require('./src/routes/ad'))

app.listen(config.port, () => {
    console.log('###################################################################################')
    console.log("################ L'application mBnB écoute bien sur le port: " + config.port + " #################")
    console.log('###################################################################################')
});