let router = require('express').Router()
let ad_controller = require('../controllers/adController')

router.route('/')
    .get(ad_controller.ad_list)
    .post(ad_controller.ad_create_post)

router.route('/:id')
    .get(ad_controller.ad_detail)
    .put(ad_controller.ad_update_post)
    .delete(ad_controller.ad_delete_post)

module.exports = router