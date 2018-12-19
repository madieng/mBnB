let router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Root Api v1')
})

module.exports = router