import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();
const pool = mysql.createPool({

     host:process.env.DB_HOST,
     port
});

