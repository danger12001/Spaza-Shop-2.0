var PurchaseDataService = require("../data-services/purchases-data-service");
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


exports.show = function(req, res, next) {
  co(function*() {
    var purchasesDataService = new PurchaseDataService(connection);
    var results = yield purchasesDataService.showPurchase();
      try {
        res.render('purchases', {
          purchases: results,
          admin: req.session.admintab,
          user: req.session.username
        });
      } catch (err) {
          console.log(err);
      }
  });
};

exports.showAdd = function(req, res) {
  co(function*() {
    var purchasesDataService = new PurchaseDataService(connection);
    var productsDataService = new ProductsDataService(connection);
    var results = yield productsDataService.showProduct();
      try {
        res.render('addPurchases', {
          purchases: results,
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
    var purchasesDataService = new PurchaseDataService(connection);
      try {
        var data = {
          date: new Date(req.body.date),
          quantity: Number(req.body.quantity),
          cost: Number(req.body.cost),
          product_id: Number(req.body.product_id),
        };

      var results = yield purchasesDataService.addPurchase(data);
                        res.redirect('/purchases');

      } catch (err) {
          console.log(err);
      }
  });
};

exports.get = function(req, res, next) {

  co(function*() {
    var id = req.params.id;
    var purchasesDataService = new PurchaseDataService(connection);
    var productsDataService = new ProductsDataService(connection);

  var purchases = yield purchasesDataService.showPurchase();
  var products = yield productsDataService.showProduct();

  // var results = yield purchasesDataService.getPurchase(id);
      try {
        var join = Promise.join(purchases,products, function(result){
          res.render('editPurchase', {
            purchases: products,
            data: result[0],
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
    var purchasesDataService = new PurchaseDataService(connection);
      try {
        var data = {
          date: new Date(req.body.date),
          quantity: Number(req.body.quantity),
          cost: Number(req.body.cost),
          product_id: Number(req.body.product_id),
        };
var id = req.params.id;
var purchases = yield purchasesDataService.updatePurchase(id,data);
res.redirect('/purchases');
      } catch (err) {
          console.log(err);
      }
  });
};

exports.delete = function(req, res, next) {
  co(function*() {
    var id = req.params.id;
      var purchasesDataService = new PurchaseDataService(connection);

      try {
        var purchases = yield purchasesDataService.deletePurchase(id);
      res.redirect('/purchases');
      } catch (err) {
          console.log(err);
      }
  });
};


exports.search = function(req, res, next) {
  co(function*() {
    var purchasesDataService = new PurchaseDataService(connection);
    var searchVal = '%'+ req.params.searchVal +'%';

      try {
      var results = yield purchasesDataService.searchPurchase([searchVal]);
        res.render('purchasesSearchResults', {
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
