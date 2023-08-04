const mysql = require('mysql2');

globalThis.tcConnection = mysql.createConnection({
    host: '3.69.50.81',
    user: 'sex',
    password: '111222333',
    database: '101m'
});
globalThis.gsmConnection = mysql.createConnection({
    host: '3.69.50.81',
    user: 'sex',
    password: '111222333',
    database: '116m'
});
globalThis.secmenConnection = mysql.createConnection({
    host: '3.69.50.81',
    user: 'sex',
    password: '111222333',
    database: 'secmen'
});