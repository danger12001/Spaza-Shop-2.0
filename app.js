var express = require('express'),
handlebars = require('express-handlebars'),
connectionProvider = require('connection-provider'),
myConnection = require('express-myconnection'),
bodyParser = require('body-parser'),
mysql = require('mysql'),
bcrypt = require('bcryptjs'),
session = require('express-session'),
flash = require('express-flash'),
fs = require("fs"),
dbSetup = require('./DB-functions/SetUpDB');
app = express();

// dbSetup.Setup(); //Uncomment this to set up the DB, remember to comment again afterwards
var signup = require('./routes/signUp'),
login = require('./routes/login');

var categories = require("./routes/categories"),
 products = require("./routes/products"),
 sales = require("./routes/sales"),
 purchase = require("./routes/purchase"),
 users = require("./routes/users");

var ProductsDataService = require("./data-services/products-data-service"),
 CategoriesDataService = require("./data-services/categories-data-service"),
 SalesDataService = require("./data-services/sales-data-service"),
 PurchasesDataService = require("./data-services/purchases-data-service"),
 UsersDataService = require("./data-services/user-data-service");


var mostPopularProduct = require('./routes/mostPopularProduct'),
 leastPopularProduct = require('./routes/leastPopularProduct'),
 mostPopularCategory = require('./routes/mostPopularCategory'),
 leastPopularCategory = require('./routes/leastPopularCategory'),
 mostProfitableProduct = require('./routes/mostProfitableProduct'),
 mostProfitableCategory = require('./routes/mostProfitableCategory'),
 weeklySalesfunc = require('./routes/weeklySales'),
 purchases = require('./routes/purchases');
var week1 = {
  mostPopularProduct: mostPopularProduct.mostPopularProduct(1),
  leastPopularProduct: leastPopularProduct.leastPopularProduct(1),
  mostPopularCategory: mostPopularCategory.mostPopularCategory(1),
  leastPopularCategory: leastPopularCategory.leastPopularCategory(1),
  mostProfitableProduct: mostProfitableProduct.mostProfitableProduct(1),
  mostProfitableCategory: mostProfitableCategory.mostProfitableCategory(1),
  weeklySales: weeklySalesfunc.weeklySales(1),
  purchases: purchases.Purchases(1)
};
var week2 = {
  mostPopularProduct: mostPopularProduct.mostPopularProduct(2),
  leastPopularProduct: leastPopularProduct.leastPopularProduct(2),
  mostPopularCategory: mostPopularCategory.mostPopularCategory(2),
  leastPopularCategory: leastPopularCategory.leastPopularCategory(2),
  mostProfitableProduct: mostProfitableProduct.mostProfitableProduct(2),
  mostProfitableCategory: mostProfitableCategory.mostProfitableCategory(2),
  weeklySales: weeklySalesfunc.weeklySales(2),
  purchases: purchases.Purchases(2)
};
var week3 = {
  mostPopularProduct: mostPopularProduct.mostPopularProduct(3),
  leastPopularProduct: leastPopularProduct.leastPopularProduct(3),
  mostPopularCategory: mostPopularCategory.mostPopularCategory(3),
  leastPopularCategory: leastPopularCategory.leastPopularCategory(3),
  mostProfitableProduct: mostProfitableProduct.mostProfitableProduct(3),
  mostProfitableCategory: mostProfitableCategory.mostProfitableCategory(3),
  weeklySales: weeklySalesfunc.weeklySales(3),
  purchases: purchases.Purchases(3)
};
var week4 = {
  mostPopularProduct: mostPopularProduct.mostPopularProduct(4),
  leastPopularProduct: leastPopularProduct.leastPopularProduct(4),
  mostPopularCategory: mostPopularCategory.mostPopularCategory(4),
  leastPopularCategory: leastPopularCategory.leastPopularCategory(4),
  mostProfitableProduct: mostProfitableProduct.mostProfitableProduct(4),
  mostProfitableCategory: mostProfitableCategory.mostProfitableCategory(4),
  weeklySales: weeklySalesfunc.weeklySales(4),
  purchases: purchases.Purchases(4)
};

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', {
    error: err,
    admin: req.session.admintab,
    user: req.session.username
  });
}

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static("public"));
var dbOptions = {
  host: '127.0.0.1',
  user: 'root',
  password: '5550121a',
  port: 3306,
  database: "Nelisa2"
};
var setupCallback = function(connection){
  return {
    productDataService : new ProductsDataService(connection),
    categoriesDataService : new CategoriesDataService(connection),
    salesDataService : new SalesDataService(connection),
    purchasesDataService : new PurchasesDataService(connection),
    usersDataService : new UsersDataService(connection)
  };
};

app.use(connectionProvider(dbOptions, setupCallback));
app.use(session({
  secret: 'space cats on synthesizers',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(myConnection(mysql, dbOptions, 'single'));
var connection = mysql.createConnection(dbOptions);



app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//MiddleWare
// OR STATEMENT
app.use(function(req, res, next) {
  if (req.path != "/login" && req.path != "/signup") {
      if (!req.session.username) {
        return res.redirect("/login");
    }
  }
  next();
});

app.use(function(req, res, next) {
  if (!req.session.admintab) {

var path = req.path.split("/")[1];

//^ DRY!!!

    if (path == "users") {
      return res.redirect("/");
    } else if (path == "sales") {
      return res.redirect("/");
    } else if (path == "products") {
      return res.redirect("/");
    } else if (path == "purchases") {
      return res.redirect("/");
    } else if (path == "categories") {
      return res.redirect("/");
    }
  }
  next();
});

//Routes
app.get('/', function(req, res) {
  res.render("index", {
    admin: req.session.admintab,
    user: req.session.username
  });
});
app.get('/week1', function(req, res) {
  res.render("week1", {
    data: week1,
    admin: req.session.admintab,
    user: req.session.username
  });
});
app.get('/week2', function(req, res) {
  res.render("week2", {
    data: week2,
    admin: req.session.admintab,
    user: req.session.username
  });
});
app.get('/week3', function(req, res) {
  res.render("week3", {
    data: week3,
    admin: req.session.admintab,
    user: req.session.username
  });
});
app.get('/week4', function(req, res) {
  res.render("week4", {
    data: week4,
    admin: req.session.admintab,
    user: req.session.username
  });
});
app.get("/signup", function(req, res, next) {
  req.getConnection(function(err, connection) {
    connection = mysql.createConnection(dbOptions);
    if (err) return next(err);
    res.render("signup");
  });
});
app.get("/login", function(req, res, next) {
  req.getConnection(function(err, connection) {
    connection = mysql.createConnection(dbOptions);
    if (err) return next(err);
    res.render("login");
  });
});
app.post('/signup', signup);
app.post('/login', login);

app.get("/logout", function(req, res, next) {
  delete req.session.username;
  delete req.session.admintab;
  res.redirect("/");
});




app.get('/products', products.show);
app.get('/product', products.showU);
app.get('/products/add', products.showAdd);
app.post('/products/add', products.add);
app.get('/products/delete/:id', products.delete);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
app.get('/products/search/:searchVal', products.search);
app.get('/product/search/:searchVal', products.searchU);

app.get('/sales', sales.show);
app.get('/sales/addSales', sales.showAdd);
app.post('/sales/addSales', sales.add);
app.get('/sales/delete/:id', sales.delete);
app.get('/sales/editSale/:id', sales.get);
app.post('/sales/update/:id', sales.update);
app.get('/sales/search/:searchVal', sales.search);

app.get('/purchases', purchase.show);
app.get('/purchases/addPurchases', purchase.showAdd);
app.post('/purchases/addPurchases', purchase.add);
app.get('/purchases/delete/:id', purchase.delete);
app.get('/purchases/editPurchase/:id', purchase.get);
app.post('/purchases/update/:id', purchase.update);
app.get('/purchases/search/:searchVal', purchase.search);

app.get('/categories', categories.show);
app.get('/category', categories.showU);
app.get('/categories/addCategory', categories.showAdd);
app.post('/categories/addCategory', categories.add);
app.get('/categories/delete/:id', categories.delete);
app.get('/categories/editCategory/:id', categories.get);
app.post('/categories/update/:id', categories.update);
app.get('/categories/search/:searchVal', categories.search);
app.get('/category/search/:searchVal', categories.searchU);


app.get('/users', users.show);
app.get('/users/addUser', users.showAdd);
app.post('/users/addUser', users.add);
app.get('/users/delete/:id', users.delete);
app.get('/users/editUser/:id', users.get);
app.post('/users/update/:id', users.update);
app.get('/users/search/:searchVal', users.search);
app.get('/user/:user', users.settingsGet);
app.post('/user/update/:user', users.settingsUpdate);

//
app.use(errorHandler);

//server Starter
var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Spaza-Shop app listening at http://%s:%s', host, port);

});
