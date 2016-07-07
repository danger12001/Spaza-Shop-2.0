var mysql = require('mysql');
var fs = require("fs");
var myConnection = require('express-myconnection');


var CreateDB = String(fs.readFileSync('./sql/CreateDB.sql'));
var connection = mysql.createConnection(dbOptions);

//DB SETUP SQL
connection.query(CreateDB, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
