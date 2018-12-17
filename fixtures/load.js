let fixtures = require('node-mongoose-fixtures')
require('../config/db')
let Ad = require('../models/ad')
let Image = require('../models/image')
let ads = require('../fixtures/ad')
let images = require('../fixtures/image')

fixtures.clear(() => {
    console.log('Base de données vidées avec succès !!!!')
});

fixtures.save('Ad', {
    'Ad': ads
}, (err, data) => {
    console.log(err, data)
})

fixtures('Ad', (err, data) => {
    console.log('##### Les ANNONCES ont bien été insérées !!!! #####')
    data[0].forEach(ad => {
        let imageDatas = images.getDatas(ad)
        fixtures({
            'Image': imageDatas
        }, function(err, data) {
        })
    },
    () => {
        console.log('##### Les IMAGES des annonces ont bien été insérées !!!! #####')
        process.exit(1)
    });
})