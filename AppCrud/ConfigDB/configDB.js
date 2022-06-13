var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  port: 3306,
  name: "loginbd",
});




module.exports = connection;


