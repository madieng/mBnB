let router = require('express').Router()

router.get('/', (req, res) => {
    res.send('HomePage')
})

module.exports = router