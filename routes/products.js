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
  co(function*() {
    var productsDataService = new ProductsDataService(connection);

      try {
        var data = {
          category_id: Number(req.body.category_id),
          product: req.body.product,
          price: Number(req.body.price)
        };
var id = req.params.id;
var results = yield productsDataService.updateProduct(data, id);
res.redirect('/products');


      } catch (err) {
          console.log(err);
      }
  });
};

exports.delete = function(req, res, next) {
  co(function*() {
    var id = req.params.id;
    var productsDataService = new ProductsDataService(connection);

      try {
        var results = yield productsDataService.deleteProduct([id]);
      res.redirect('/products');
      } catch (err) {
          console.log(err);
      }
  });
};

exports.search = function(req, res, next) {
  co(function*() {
    var productsDataService = new ProductsDataService(connection);
    var searchVal = '%'+ req.params.searchVal +'%';

      try {
        var results = yield productsDataService.searchProduct([searchVal]);
        res.render('searchResults', {
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
exports.searchU = function(req, res, next) {
  co(function*() {
    var productsDataService = new ProductsDataService(connection);
    var searchVal = '%'+ req.params.searchVal +'%';

      try {
        var results = yield productsDataService.searchProduct([searchVal]);
        res.render('searchResults', {
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
