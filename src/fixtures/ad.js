let slugify = require('slugify')
let faker = require('faker')
faker.locale = 'fr'

let ads = []
for (let index = 0; index < 30; index++) {
    let title = faker.lorem.sentence(5) 
    ads.push({
        title: title,
        slug: slugify(title),
        price: faker.random.number({ min: 25, max: 89 }),
        rooms: faker.random.number({ min: 2, max: 5 }),
        introduction: faker.lorem.paragraph(10),
        content: '<p>' + faker.lorem.paragraphs(5, '</p><p>') + '</p>',
        coverImage: faker.image.imageUrl(),
        // active: faker.random.boolean(),
        active: true,
    })
}

module.exports = ads