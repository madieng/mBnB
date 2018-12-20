let Ad = require('../models/ad')
let Image = require('../models/image')

let AdRepo = class {
    static getAll() {
        return new Promise((resolve, reject) => {
            Ad.find({}, null, { skip: 0, limit: 10 }, (err, ads) => {
                if (err)
                    resolve(new Error('Error getAll'))
                else
                    resolve(ads)
            }).populate('images')
        })
    }
} 

module.exports = AdRepo