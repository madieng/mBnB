let express = require('express')
let config = require('./config/config')
require('./config/db')

let app = express()

app.use(config.rootApi, require('./routes/index'))
app.use(config.rootApi + 'ads', require('./routes/ad'))

app.listen(config.port, () => {
    console.log('###################################################################################')
    console.log("################ L'application mBnB écoute bien sur le port: " + config.port + " #################")
    console.log('###################################################################################')
});