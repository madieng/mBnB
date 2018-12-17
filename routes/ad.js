let router = require('express').Router()
let ad_controller = require('../controllers/adController')

router.get('/', ad_controller.ad_list)

router.get('/show/:slug', ad_controller.ad_detail)

router.get('/new', ad_controller.ad_create_get)

router.post('/create', ad_controller.ad_create_post)

router.get('/:slug/edit/', ad_controller.ad_update_get)

router.put('/update', ad_controller.ad_update_post)

router.get('/:slug/delete', ad_controller.ad_delete_get)

router.delete('/delete', ad_controller.ad_delete_post)

module.exports = router