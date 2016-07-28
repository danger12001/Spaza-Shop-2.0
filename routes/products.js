var ProductsDataService = require("../data-services/products-data-service");
var CategoryDataService = require("../data-services/categories-data-service");
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



exports.showAdd = function(req, res) {
  co(function*() {
    var productsDataService = new ProductsDataService(connection);
    var results = yield productsDataService.showProduct();

      try {
          res.render('add', {
              categories:   results,
              admin: req.session.admintab,
              user: req.session.username
          });
      } catch (err) {
          console.log(err);
      }
  });
};
exports.show = function(req, res) {
  co(function*() {
    var productsDataService = new ProductsDataService(connection);
    var results = yield productsDataService.showProduct();
      try {
          res.render('products', {
              products: results,
              admin: req.session.admintab,
              user: req.session.username
          });
      } catch (err) {
          console.log(err);
      }
  });

};
exports.showU = function(req, res) {
  co(function*() {
    var productsDataService = new ProductsDataService(connection);
    var results = yield productsDataService.showProduct();
      try {
          res.render('productsU', {
              products: results,
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
    var productsDataService = new ProductsDataService(connection);

      try {
        var data = {
          category_id: Number(req.body.category_id),
          product: req.body.product,
          price: Number(req.body.price)
        };


                        var results = yield productsDataService.addProduct(data);
                        res.redirect('/products');

      } catch (err) {
          console.log(err);
      }
  });
};


exports.get = function(req, res, next) {

  co(function*() {
    var id = req.params.id;
    var productsDataService = new ProductsDataService(connection);
    var categoryDataService = new CategoryDataService(connection);
    var results = yield productsDataService.getProduct(id);
    var categories = yield categoryDataService.showCategory();
      try {
          res.render('edit', {
            categories: categories,
              data:   results[0],
              admin: req.session.admintab,
              user: req.session.username
          });
      } catch (err) {
          console.log(err);
      }
  });
};

exports.update = function(req, res, next) {

  var data = {
    category_id: Number(req.body.category_id),
    product: req.body.product,
    price: Number(req.body.price)
  };
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE products SET ? WHERE id = ?', [data, id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/products');
    });
  });
};

exports.delete = function(req, res, next) {
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    connection.query('DELETE FROM products WHERE id = ?', [id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/products');
    });
  });
};

exports.search = function(req, res, next) {
  req.getConnection(function(err, connection) {
    var searchVal = '%' + req.params.searchVal + '%';
    connection.query('SELECT products.id, products.product, categories.category FROM products INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ?', [searchVal, searchVal], function(err, result) {
      if (err) return console.log(err);
      res.render('searchResults', {
        search: result,
        admin: req.session.admintab,
        user: req.session.username,
        layout: false
      });
    });
  });
};
exports.searchU = function(req, res, next) {
  req.getConnection(function(err, connection) {
    var searchVal = '%' + req.params.searchVal + '%';
    connection.query('SELECT products.id, products.product, categories.category FROM products INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ?', [searchVal, searchVal], function(err, result) {
      if (err) return console.log(err);
      res.render('productSearchResult', {
        search: result,
        admin: req.session.admintab,
        user: req.session.username,
        layout: false
      });
    });
  });
};
