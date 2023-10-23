var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var rm = Math.random().toFixed(2);
    var re = Math.asinh(rm).toFixed(3);
    res.render('computation', { func: `Math.asinh(${rm}) is ${re}` });
});

module.exports = router;
