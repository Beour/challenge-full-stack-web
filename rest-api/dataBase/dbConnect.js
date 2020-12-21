const mysql = require("mysql");

// conenction pool
let connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_crud'
});

module.exports = connection;