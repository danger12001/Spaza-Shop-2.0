var mysql = require('mysql');
var fs = require("fs");
var myConnection = require('express-myconnection');

var CreateDB = String(fs.readFileSync('./DB-functions/sql/CreateDB.sql'));
var categoriesTable = String(fs.readFileSync('./DB-functions/sql/categoriesTable.sql'));
var productsTable = String(fs.readFileSync('./DB-functions/sql/productsTable.sql'));
var purchaseTable = String(fs.readFileSync('./DB-functions/sql/purchaseTable.sql'));
var salesTable = String(fs.readFileSync('./DB-functions/sql/salesTable.sql'));
var usersTable = String(fs.readFileSync('./DB-functions/sql/usersTable.sql'));
var productsFK = String(fs.readFileSync('./DB-functions/sql/productsFK.sql'));
var purchaseFK = String(fs.readFileSync('./DB-functions/sql/purchaseFK.sql'));
var salesFK = String(fs.readFileSync('./DB-functions/sql/salesFK.sql'));
exports.setup = function (){
  var dbOptions = {
    host: '127.0.0.1',
    user: 'root',
    password: '5550121a',
    port: 3306,
    database: "Nelisa2"
  };
var connection = mysql.createConnection(dbOptions);

//DB SETUP SQL
connection.query(CreateDB, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
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
connection.query(productsFK, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
connection.query(purchaseFK, [], function(err, result) {
  if (err) throw err;
  // connection.end();
});
connection.query(salesFK, [], function(err, result) {
  if (err) throw err;
  connection.end();
});
};
