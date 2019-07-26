const mysql = require('mysql');

const mysqlConection = mysql.createConnection({
    database: 'db_titivan',
    host: 'localhost',
    user: 'root',
    password: '12345678',
});

mysqlConection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Database is connected');
    } 
});

module.exports = mysqlConection;