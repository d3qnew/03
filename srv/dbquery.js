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
    }

}

