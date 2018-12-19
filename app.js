let express = require('express')
require('./config/db')

let app = express()

app.use('/', require('./routes/index'))
app.use('/api/v1/ads', require('./routes/ad'))

let port = 3000
app.listen(port, () => {
    console.log('###################################################################################')
    console.log("################ L'application mBnB écoute bien sur le port: " + port + " #################")
    console.log('###################################################################################')
});