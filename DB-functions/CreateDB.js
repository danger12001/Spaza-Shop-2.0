var mysql = require('mysql');
var fs = require("fs");
var myConnection = require('express-myconnection');

var dbOptions = {
  host: '127.0.0.1',
  user: 'root',
  password: '5550121a',
  port: 3306,
};
var CreateDB = String(fs.readFileSync('./DB-functions/sql/CreateDB.sql'));
var connection = mysql.createConnection(dbOptions);

exports.create = function(){

//DB SETUP SQL
connection.query(CreateDB, [], function(err, result) {
  if (err) throw err;
  // connection.end();
  console.log('DB created!');
});

};
