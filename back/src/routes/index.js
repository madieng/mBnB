let router = require('express').Router()

router.get('/', (req, res) => {
    res.json({'message': 'Root Api v1'})
})

module.exports = router