let Ad = require('../models/ad')
let Image = require('../models/image')
let AdRepo = require('../repositories/ad.repository')
let { success, error, checkAndReturn } = require('../services/functions')

// Display list of all Ads.
exports.ad_list = async (req, res) => {
    let ads = await AdRepo.getAll();
    res.json(checkAndReturn(ads))
};

// Display detail page for a specific ad.
exports.ad_detail = async (req, res) => {
    let ad = await AdRepo.getById(req.params.id)
    res.json(checkAndReturn(ad))
};

// Handle ad create on POST.
exports.ad_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ad create POST');
};

// Handle ad delete on POST.
exports.ad_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ad delete POST');
};

// Handle ad update on POST.
exports.ad_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ad update POST');
};