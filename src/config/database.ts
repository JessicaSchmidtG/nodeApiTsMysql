import mysql from 'mysql2';
import dotenv from 'dotenv';
import { start } from 'repl';
dotenv.config();
//127.0.0.1 = localhost porta padrao mysql 3306

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

export default {
    connection
}