import mysql from "mysql2";
import dotenv from "dotenv";

// Load dotenv file
const env = dotenv.config( { path: '.env.docker' } );
console.log(env);

// create the connection to database
const db = mysql.createConnection(
    {
        host:           env.parsed.DB_HOST,
        port:           env.parsed.DB_PORT,
        user:           env.parsed.DB_USER,
        password:       env.parsed.DB_PASSWORD,
        database:       env.parsed.DB_NAME
    });

export default db;