let config = require('./config')
let mongoose = require('mongoose')
mongoose.connect('mongodb://' + config.db.localhost + '/' + config.db.database, { useNewUrlParser: config.db.useNewUrlParser })
