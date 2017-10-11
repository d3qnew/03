var express = require('express');
var router = express.Router();
var dbquery = require('../srv/dbquery');


/*dbquery.r('select * from account', [1], function (err, res, fields) {
    if (err) {
        console.log(err);
        return
    }
    console.log(res);
})*/


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'mylch.com'});
});

router.get('/main', function (req, res) {
    res.render('main.html', {
        title: 'main',
        content: 'xxx'
    });
});

router.get('/test', function (req, res) {

    res.render('test.html', {
        title: 'test',

    });


});

///////////////////////////////////////////////
//登录
router.get('/login', (function (req, res) {
    if(req.cookies.islogin){
        req.session.islogin=req.cookies.islogin;
    }
    if(req.session.islogin){
        res.locals.islogin=req.session.islogin;
    }
    if(res.locals.islogin){
        res.render('home', { title: 'Home', user: res.locals.islogin });
    }else{
        res.render('login', {title: 'login'});
    }
}));
router.post('/login',(function (req, res) {
        result = null;
        dbquery.selectFun( req.body.username, function (result) {
            //console.log(result[0]);
            if (result[0] === undefined) {
                res.send('没有该用户');
            } else {
                //console.log(req.body.pass);
                if (result[0].pass === req.body.pass) {
                    console.log('pass ok');
                    req.session.islogin = req.body.username;
                    res.locals.islogin = req.session.islogin;
                    res.cookie('islogin', res.locals.islogin, {maxAge: 60000});
                    console.log('userfffffffffffffffff:',res.locals.islogin);
                    res.render('home',{
                        user:res.locals.islogin,
                        title:'home'
                    });
                } else {
                    console.log('pass is wrong');
                    res.render('login',{title:'login'});
                }
            }
        });
    }));

///////////////////////////////////////////////////////////////////
router.get('/logout', function(req, res) {
    res.clearCookie('islogin');
    req.session.destroy();
    res.redirect('/');
});

/////////////////////////////////////////////////////////////////
router.get('/home', function(req, res) {
    if(req.cookies.islogin){
        req.session.islogin=req.cookies.islogin;
    }
    if(req.session.islogin){
        res.locals.islogin=req.session.islogin;
    }
    if(res.locals.islogin){

        res.render('home', { title: 'Home', user: res.locals.islogin });
    }else{
        res.redirect('/login');
    }

});
/////////////////////////////////////////////////////////////////

router.route('/reg')
    .get(function(req,res){
        res.render('reg',{title:'注册'});
    })
    .post(function(req,res) {
        client = dbquery;

        dbquery.insertFun(client,req.body.username ,req.body.password2, function (err) {
            if(err) throw err;
            res.send('注册成功');
        });
    });






module.exports = router;
