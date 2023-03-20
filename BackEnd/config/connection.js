const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "eticket-prototype"
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connection Succes');
})

module.exports = con;