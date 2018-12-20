let mongoose = require('mongoose')

let imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    caption: { type: String, required: true },
    ad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ad'
    },
    active: { type: Boolean, default: false },
})

let Image = mongoose.model('Image', imageSchema)

module.exports = Image