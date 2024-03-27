const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'database',
    password: 'root'
});

module.exports = connection;


const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'database',
    password: 'root',
    port: 5432,
});

module.exports = pool;

const connection = require('./database');

connection.query('SELECT * FROM randonnees', (err, results) => {
    if (err) throw err;
    console.log(results);
});
