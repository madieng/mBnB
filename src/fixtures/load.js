let fixtures = require('node-mongoose-fixtures')
require('../../config/db')
let Ad = require('../models/ad')
let Image = require('../models/image')
let ads = require('../fixtures/ad')
let images = require('../fixtures/image')

fixtures.reset(() => {
    console.log("\n")
    console.log("#####################################################")
    console.log("##### Initialisation de la base de données !!!! #####")
    console.log("#####################################################")
    console.log("\n")
    console.log('***** Base de données vidées avec succès !!!! *****')
    console.log("\n")
    fixtures.save('Ad', {
        'Ad': ads
    }, (err, data) => {})
    
    fixtures('Ad', async (err, data) => {
        console.log('***** Les ANNONCES ont bien été insérées !!!! *****')
        console.log("\n")
        let imageDatas = []
        await data[0].forEach(ad => {
            imageDatas = imageDatas.concat(images.getDatas(ad))
        })
    
        fixtures({ 'Image' : imageDatas }, (err, data) => {
            console.log("***** Les IMAGES des annonces ont bien été insérées !!!! *****")
            console.log("\n")
            process.exit()
        })
    })
});
