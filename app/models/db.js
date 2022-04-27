const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// create connection to MySQL
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

// open connection
connection.connect(err =>{

    if(err) throw err; // if error - stop running

    console.log("connected to MySQL");

})

module.exports = connection;