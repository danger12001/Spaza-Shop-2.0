var express = require('express');
var handlebars = require('express-handlebars');
var app = express();
var  myConnection = require('express-myconnection');
var  bodyParser = require('body-parser');

var mostPopularProduct = require('./routes/mostPopularProduct');
var leastPopularProduct = require('./routes/leastPopularProduct');
var mostPopularCategory = require('./routes/mostPopularCategory');
var leastPopularCategory = require('./routes/leastPopularCategory');
var mostProfitableProduct = require('./routes/mostProfitableProduct');
var mostProfitableCategory = require('./routes/mostProfitableCategory');
var weeklySalesfunc = require('./routes/weeklySales');
var purchases = require('./routes/purchases');

var week1 = {mostPopularProduct: mostPopularProduct.mostPopularProduct(1), leastPopularProduct: leastPopularProduct.leastPopularProduct(1), mostPopularCategory: mostPopularCategory.mostPopularCategory(1),leastPopularCategory: leastPopularCategory.leastPopularCategory(1),mostProfitableProduct: mostProfitableProduct.mostProfitableProduct(1), mostProfitableCategory: mostProfitableCategory.mostProfitableCategory(1), weeklySales: weeklySalesfunc.weeklySales(1), purchases: purchases.Purchases(1) };
var week2 = {mostPopularProduct: mostPopularProduct.mostPopularProduct(2), leastPopularProduct: leastPopularProduct.leastPopularProduct(2), mostPopularCategory: mostPopularCategory.mostPopularCategory(2),leastPopularCategory: leastPopularCategory.leastPopularCategory(2),mostProfitableProduct: mostProfitableProduct.mostProfitableProduct(2), mostProfitableCategory: mostProfitableCategory.mostProfitableCategory(2), weeklySales: weeklySalesfunc.weeklySales(2), purchases: purchases.Purchases(2) };
var week3 = {mostPopularProduct: mostPopularProduct.mostPopularProduct(3), leastPopularProduct: leastPopularProduct.leastPopularProduct(3), mostPopularCategory: mostPopularCategory.mostPopularCategory(3),leastPopularCategory: leastPopularCategory.leastPopularCategory(3),mostProfitableProduct: mostProfitableProduct.mostProfitableProduct(3), mostProfitableCategory: mostProfitableCategory.mostProfitableCategory(3), weeklySales: weeklySalesfunc.weeklySales(3), purchases: purchases.Purchases(3)};
var week4 = {mostPopularProduct: mostPopularProduct.mostPopularProduct(4), leastPopularProduct: leastPopularProduct.leastPopularProduct(4), mostPopularCategory: mostPopularCategory.mostPopularCategory(4),leastPopularCategory: leastPopularCategory.leastPopularCategory(4),mostProfitableProduct: mostProfitableProduct.mostProfitableProduct(4), mostProfitableCategory: mostProfitableCategory.mostProfitableCategory(4), weeklySales: weeklySalesfunc.weeklySales(4), purchases: purchases.Purchases(4)};


app.use(express.static("public"));

var dbOptions = {
      host: 'localhost',
      user: 'me',
      password: 'secret',
      port: 3000,
    };

    // app.use(myConnection(dbOptions, 'single'));

    app.engine('handlebars', handlebars({defaultLayout : 'main'}));
    app.set('view engine', 'handlebars');

//routes
    app.get('/', function (req, res) {
     res.render("index");
    });
    app.get('/week1', function (req, res) {
     res.render("week1", week1);
    });
    app.get('/week2', function (req, res) {
     res.render("week2", week2);
    });
    app.get('/week3', function (req, res) {
     res.render("week3", week3);
    });
    app.get('/week4', function (req, res) {
     res.render("week4", week4);
    });
//start server
    var server = app.listen(3000, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Spaza-Shop app listening at http://%s:%s', host, port);

    });
