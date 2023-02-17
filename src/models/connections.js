const mysql = require('mysql2/promise');

const credentials = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || 'f1',
  charset: 'utf8mb4',
};

const connection = mysql.createPool({ ...credentials });

module.exports = connection;
