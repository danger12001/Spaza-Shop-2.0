var mysql = require('mysql');
var fs = require("fs");
var myConnection = require('express-myconnection');

var categoriesTable = String(fs.readFileSync('./sql/categoriesTable.sql'));
var productsTable = String(fs.readFileSync('./sql/productsTable.sql'));
var purchaseTable = String(fs.readFileSync('./sql/purchaseTable.sql'));
var salesTable = String(fs.readFileSync('./sql/salesTable.sql'));
var usersTable = String(fs.readFileSync('./sql/usersTable.sql'));
  var dbOptions = {
    host: '127.0.0.1',
    user: 'root',
    password: '5550121a',
    port: 3306,
    database: "travis_db"
  };
var connection = mysql.createConnection(dbOptions);

//DB SETUP SQL
connection.query(categoriesTable, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
connection.query(productsTable, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
connection.query(purchaseTable, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
connection.query(salesTable, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
connection.query(usersTable, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
