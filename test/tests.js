var mysql = require('mysql');
var password = process.env.MYSQL_PWD !== undefined ? process.env.MYSQL_PWD : '5550121a';
var dbOptions = {
  host: '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: password,
  port: 3306,
  database: "travis_db"
};
var connection = mysql.createConnection(dbOptions);

var purchases = require('./Purchases-test');
var mostPopularProduct = require('./most-Popular-Product-tests');
var mostProfitableProduct = require('./most-profitable-product-tests');
var mostProfitableCategory = require('./most-profitable-category-tests');
var mostPopularCategory = require('./most-popular-category-tests');
var leastPopularCategory = require('./least-popular-category-tests');
var leastPopularProduct = require('./least-Popular-Product-tests');
var weeklySales = require('./weeklySales-tests');
var productsDS = require('./products-data-service-test');
var categoriesDS = require('./categories-data-service-test');
var salesDS = require('./sales-data-service-test');
var purchasesDS = require('./purchases-data-service-test');
var usersDS = require('./user-data-service-test');
weeklySales();
leastPopularProduct();
mostPopularProduct();
mostPopularCategory();
leastPopularCategory();
mostProfitableProduct();
mostProfitableCategory();
purchases();
productsDS(connection);
categoriesDS(connection);
salesDS(connection);
purchasesDS(connection);
usersDS(connection);
