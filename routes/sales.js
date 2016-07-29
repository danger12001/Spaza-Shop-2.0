var SalesDataService = require("../data-services/sales-data-service");
var CategoryDataService = require("../data-services/categories-data-service");
var ProductsDataService = require("../data-services/products-data-service");
var Promise = require('bluebird');
var bcrypt = require('bcryptjs');
var co = require('co');
var mysql = require('mysql');
var password = process.env.MYSQL_PWD !== undefined ? process.env.MYSQL_PWD : '5550121a';
var dbOptions = {
  host: '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: password,
  port: 3306,
  database: "Nelisa2"
};
var connection = mysql.createConnection(dbOptions);




exports.show = function(req, res) {
  co(function*() {
    var salesDataService = new SalesDataService(connection);
    var results = yield salesDataService.showSale();
      try {
        res.render('sales', {
          sales: results,
          admin: req.session.admintab,
          user: req.session.username
        });
      } catch (err) {
          console.log(err);
      }
  });
};
exports.showAdd = function(req, res, next) {
  co(function*() {
    var salesDataService = new SalesDataService(connection);
    var productsDataService = new ProductsDataService(connection);

    var results = yield productsDataService.showProduct();
      try {
        res.render('addSales', {
          sales: results,
          admin: req.session.admintab,
          user: req.session.username
        });
      } catch (err) {
          console.log(err);
      }
  });
};

exports.add = function(req, res, next) {
  co(function*() {
    var salesDataService = new SalesDataService(connection);
      try {
        var price =  Number(req.body.price);
        var markup = Number(req.body.markup);
          var data = {
            date: new Date(req.body.date),
            product_id: Number(req.body.product_id),
            sold: Number(req.body.sold),
            price: price + markup
          };

        var results = yield salesDataService.addSale(data);

                        res.redirect('/sales');

      } catch (err) {
          console.log(err);
      }
  });
};

exports.get = function(req, res, next) {
  co(function*() {
    var id = req.params.id;
    var salesDataService = new SalesDataService(connection);
    var productsDataService = new ProductsDataService(connection);

var sales = yield salesDataService.showSale();

    var products = yield productsDataService.showProduct();
    // var results = yield salesDataService.getSale(id);
      try {
        var join = Promise.join(sales,products, function(result){
        res.render('editSale', {
          data: result[0],
          sales: products,
          admin: req.session.admintab,
          user: req.session.username
        });
      });
      } catch (err) {
          console.log(err);
      }
  });
};

exports.update = function(req, res, next) {
  co(function*() {
    var salesDataService = new SalesDataService(connection);
      try {
        var data = {
          date: new Date(req.body.date),
          product_id: Number(req.body.product_id),
          sold: Number(req.body.sold),
          price: Number(req.body.price),
        };
var id = req.params.id;
var sales = yield salesDataService.updateSale(id,data);
res.redirect('/sales');
      } catch (err) {
          console.log(err);
      }
  });
};

exports.delete = function(req, res, next) {
  co(function*() {
    var id = req.params.id;
    var salesDataService = new SalesDataService(connection);

      try {
        var results = yield salesDataService.deleteSale(id);
      res.redirect('/sales');
      } catch (err) {
          console.log(err);
      }
  });
};

exports.search = function(req, res, next) {
  co(function*() {
    var salesDataService = new SalesDataService(connection);
    var searchVal = '%'+ req.params.searchVal +'%';

      try {
        var results = yield salesDataService.searchSale([searchVal]);
        res.render('salesSearchResults', {
          search: results,
          admin: req.session.admintab,
          user: req.session.username,
          layout: false
        });
      } catch (err) {
          console.log(err);
      }
  });
};
