let Ad = require('../models/ad')
let Image = require('../models/image')
let { success, error } = require('../services/functions')

// Display list of all Ads.
exports.ad_list = function(req, res) {
    Ad.find({}, null, { skip: 0, limit: 10}).populate('images').then((ads) => {
        res.json(success(ads))
    }, 
    (err) => {
        res.json(error("Il y a eu une erreur lors de la récupération des annonces."))
    })
};

// Display detail page for a specific ad.
exports.ad_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: ad detail: ' + req.params.id);
};

// Display ad create form on GET.
exports.ad_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ad create GET');
};

// Handle ad create on POST.
exports.ad_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ad create POST');
};

// Display ad delete form on GET.
exports.ad_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ad delete GET');
};

// Handle ad delete on POST.
exports.ad_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ad delete POST');
};

// Display ad update form on GET.
exports.ad_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ad update GET');
};

// Handle ad update on POST.
exports.ad_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ad update POST');
};