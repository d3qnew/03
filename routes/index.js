var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render(
        'index',
        {
            title: 'Express',
            content: 'mian.html'
        }
    );
});

router.get('/main',function (req,res) {
    res.render('main',{
        title:'main',
        content:'xxx'
    });
});

module.exports = router;
