const mysql = require('mysql2');

globalThis.tcConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: '101m'
});
globalThis.gsmConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: '116m'
});
// globalThis.secmenConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '111222333',
//     database: 'secmen'
// });