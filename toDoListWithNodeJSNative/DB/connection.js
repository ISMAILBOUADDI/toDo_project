var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ismail",
  database: "todos_db"

});

module.exports = con;