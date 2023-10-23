var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.x==undefined) {
        rm = Math.random();
    }
    else {
        rm = req.query.x;
    }
    var result = Math.asinh(rm);
    res.render('computation', { func: `Math.asinh(${rm}) is ${result}` });
});

module.exports = router;
