console.log('db is load');
var db = null;
module.exports = {
    init: function () {
        if (db === null) {
            db = require('mysql').createPool({
                host: 'localhost',
                user: 'root',
                password: 'Aa000000',
                database: 'mylchweb'
            });
            if (!db) {
                console.log('connect fail');
                return
            }
        }
        return db;
    },
    r: function (sql, options, callback) {
        console.log('this is r()');
        this.init().getConnection(function (err, conn) {
            if (err) {
                callback(err, null, null);
            } else {
                conn.query(sql, options, function (err, results, fields) {
                    //释放连接
                    conn.release();
                    //事件驱动回调
                    callback(err, results, fields);
                });
            }
        });

    },
    u: function (sql) {
        console.log('this is u()');
    },

    ////////////////////////////////////////////////////////////////////
    selectFun: function (username, callback) {
        //client为一个mysql连接对象
        this.init().query('select pass from account where account="' + username + '"', function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    },
    ///////////////////////////////////////////////////////////////////////
    insertFun:function (dbcon , username , password,callback) {
        this.init().query('insert into account value(?,?)', [username, password], function (err, result) {
            if (err) {
                console.log("error:" + err.message);
                return err;
            }
            callback(err);
        });
    }

}

