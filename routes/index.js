var express = require('express');
var router = express.Router();
var dbquery = require('../srv/dbquery');


/*dbquery.r('select * from account',[1],function (err,res,fields) {
    if(err){
        console.log(err);
        return
    }
    console.log(res);
})*/



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

router.get('/main', function (req, res) {
    res.render('main', {
        title: 'main',
        content: 'xxx'
    });
});

router.get('/test', function (req, res) {

    res.render('test.html', {
        title: 'test',

    });


});

module.exports = router;
