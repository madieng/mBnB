let faker = require('faker')
faker.locale = 'fr'

let images = {
    getDatas: (ad) => {
        let datas = []
        // console.log('&&&&&', ad)
        for (let index = 0; index < faker.random.number({min:3, max: 10}); index++) {
            datas.push({
                url: faker.image.imageUrl(),
                caption: faker.lorem.words(3),
                ad: ad._id,
                // active: faker.random.boolean(),
                active: true,
            })
        }

        return datas
    }
}

module.exports = images