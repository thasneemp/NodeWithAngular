/**
 * Created by thasneem on 5/4/16.
 */
var express = require('express');
var router = express.Router();
var VCollection = require('../models/VideoCollection');

router.get('/', function (req, res, next) {
    VCollection.find({}, function (err, details) {
        if (err) throw err;
        console.log(details);
        res.json(details);
    });
})
router.post('/', function (req, res, next) {
    var title = req.body.title;
    var genre = req.body.genre;
    var description = req.body.description;
    vCol = new VCollection();

    vCol.title = title;
    vCol.genre = genre;
    vCol.description = description;

    vCol.save(function (err, details) {
        res.json(details);
    });
});
module.exports = router;