var CategoriesDataService = require("../data-services/categories-data-service");
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
    var categoryDataService = new CategoriesDataService(connection);
    var results = yield categoryDataService.showCategory();

      try {
        res.render('addCategory', {
          categories: results,
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
    var categoryDataService = new CategoriesDataService(connection);
    var results = yield categoryDataService.showCategory();

      try {
        res.render('categories', {
          categories: results,
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
    var categoryDataService = new CategoriesDataService(connection);
    var results = yield categoryDataService.showCategory();

      try {
        res.render('categoriesU', {
          categories: results,
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
    var categoryDataService = new CategoriesDataService(connection);
      try {
        var data = {
          category: req.body.category,
        };


        var results = yield categoryDataService.addCategory(data);
                        res.redirect('/categories');

      } catch (err) {
          console.log(err);
      }
  });
};
exports.get = function(req, res, next) {
  co(function*() {
    var id = req.params.id;
    var categoryDataService = new CategoriesDataService(connection);
    var results = yield categoryDataService.getCategory(id);

      try {
        res.render('editCategory', {

               data: results[0],
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
    var categoryDataService = new CategoriesDataService(connection);
      try {
        var data = {
          category: req.body.category,
        };
        var id = req.params.id;
        var results = yield categoryDataService.updateCategory(id, data);
        res.redirect('/categories');
      } catch (err) {
          console.log(err);
      }
  });

};

exports.delete = function(req, res, next) {
  co(function*() {
    var categoryDataService = new CategoriesDataService(connection);
      try {
        var id = req.params.id;
        var results = yield categoryDataService.deleteCategory(id);
        res.redirect('/categories');
      } catch (err) {
          console.log(err);
      }
  });
};

exports.search = function(req, res, next) {
  co(function*() {
  var categoryDataService = new CategoriesDataService(connection);
    var searchVal = '%'+ req.params.searchVal +'%';

      try {
        var results = yield categoryDataService.searchCategory([searchVal]);
        res.render('CategorySearchResults', {
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
  var categoryDataService = new CategoriesDataService(connection);
    var searchVal = '%'+ req.params.searchVal +'%';

      try {
        var results = yield categoryDataService.searchCategory([searchVal]);
        res.render('CatSearchResults', {
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
