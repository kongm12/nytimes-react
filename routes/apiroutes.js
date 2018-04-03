
var express = require("express");

var articleController = require("../controllers/articlecontroller");

var router = new express.Router();

// Get all articles (or optionally a specific quote with an id)
router.get('/saved', articlecontroller.index);
// Create a new article using data passed in req.body
router.post('/saved', articlecontroller.create);
// Update an existing quote with a speicified id param, using data in req.body
router.delete('/saved/:id', articlecontroller.destroy);


module.exports = router;