let mongoose = require('mongoose')

let adSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    introduction: { type: String, required: true },
    content: { type: String, required: true},
    coverImage: { type: String, required: true},
    active: { type: Boolean, default: false},
    createdDate: { type: Date, default: Date.now }
})

adSchema.virtual('images', {
    ref: 'Image',
    localField: '_id',
    foreignField: 'ad'
})
adSchema.set('toObject', { virtuals: true });
adSchema.set('toJSON', { virtuals: true });

let Ad = mongoose.model('Ad', adSchema)

module.exports = Ad