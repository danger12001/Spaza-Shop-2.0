
var express = require('express');
var handlebars = require('express-handlebars');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require("fs");
var bcrypt = require('bcrypt');
var session = require('express-session');
var flash = require('express-flash');
var mostPopularProduct = require('./routes/mostPopularProduct');
var leastPopularProduct = require('./routes/leastPopularProduct');
var mostPopularCategory = require('./routes/mostPopularCategory');
var leastPopularCategory = require('./routes/leastPopularCategory');
var mostProfitableProduct = require('./routes/mostProfitableProduct');
var mostProfitableCategory = require('./routes/mostProfitableCategory');
var weeklySalesfunc = require('./routes/weeklySales');
var purchases = require('./routes/purchases');
var products = require('./routes/products');
var purchase = require('./routes/purchase');
var sales = require('./routes/sales');
var categories = require('./routes/categories');
var signup  = require('./routes/signUp');
var login = require('./routes/login');
var users = require('./routes/users');
var app = express();

var categoriesTable = String(fs.readFileSync("./sql/categoriesTable.sql"));
var productsTable = String(fs.readFileSync("./sql/productsTable.sql"));
var purchaseTable = String(fs.readFileSync("./sql/purchaseTable.sql"));
var salesTable = String(fs.readFileSync("./sql/salesTable.sql"));
var productsFK = String(fs.readFileSync("./sql/productsFK.sql"));
var purchaseFK = String(fs.readFileSync("./sql/purchaseFK.sql"));
var salesFK = String(fs.readFileSync("./sql/salesFK.sql"));
var usersTable = String(fs.readFileSync("./sql/usersTable.sql"));

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
app.use(bodyParser.urlencoded({
    extended: false
}));


// parse application/json
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err,
        admin: req.session.admintab, user: req.session.username
    });
}
app.use(express.static("public"));
var dbOptions = {
    host: '127.0.0.1',
    user: 'root',
    password: '5550121a',
    port: 3306,
    database: "Nelisa"
};
app.use(session({
    secret: 'space cats on synthesizers',
    // cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(myConnection(mysql, dbOptions, 'single'));
var connection = mysql.createConnection(dbOptions);
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(function(req, res, next){
  if (req.path != "/login"){
    if(req.path !="/signup"){
    if (!req.session.username ){
      return res.redirect("/login");
    }

  }
  }
  next();
});

app.use(function(req, res, next){
  if(!req.session.admintab){
    if (req.path == "/users"){
    return res.redirect("/");
  }
  else if(req.path == "/sales"){
    return res.redirect("/");
  }
  else if(req.path == "/sales/addSales"){
    return res.redirect("/");
  }
  else if(req.path == "/sales/editSale"){
    return res.redirect("/");
  }
  else if(req.path == "/sales/delete"){
    return res.redirect("/");
  }
  else if(req.path == "/products"){
    return res.redirect("/");
  }
  else if(req.path == "/products/add"){
    return res.redirect("/");
  }
  else if(req.path == "/products/edit"){
    return res.redirect("/");
  }
  else if(req.path == "/products/delete"){
    return res.redirect("/");
  }
  else if(req.path == "/purchases"){
    return res.redirect("/");
  }
  else if(req.path == "/purchases/addPurchases"){
    return res.redirect("/");
  }
  else if(req.path == "/purchases/editPurchase"){
    return res.redirect("/");
  }
  else if(req.path == "/purchases/delete"){
    return res.redirect("/");
  }
  else if(req.path == "/categories"){
    return res.redirect("/");
  }
  else if(req.path == "/categories/addCategory"){
    return res.redirect("/");
  }
  else if(req.path == "/categories/editCategory"){
    return res.redirect("/");
  }
  else if(req.path == "/categories/delete"){
    return res.redirect("/");
  }
}
next();
});
//routes
app.get('/', function(req, res) {
    res.render("index", {admin: req.session.admintab, user: req.session.username});
});
app.get('/week1', function(req, res) {
    res.render("week1", {data: week1, admin: req.session.admintab, user: req.session.username});
});
app.get('/week2', function(req, res) {
    res.render("week2",{data: week2, admin: req.session.admintab, user: req.session.username});
});
app.get('/week3', function(req, res) {
    res.render("week3", {data: week3, admin: req.session.admintab, user: req.session.username});
});
app.get('/week4', function(req, res) {
  res.render("week4", {data: week4, admin: req.session.admintab, user: req.session.username});
});
app.get('/sales', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT sales.id,sales.date,sales.sold,sales.price, products.product FROM sales, products WHERE sales.product_id = products.id AND sales.sold > 0 ORDER BY `sales`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("sales", {
                sales: data,
                admin: req.session.admintab, user: req.session.username

            });
           //  connection.end();
        });
    });
});


app.get('/purchases', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT purchases.id,purchases.date,purchases.cost, products.product, purchases.quantity FROM purchases, products WHERE purchases.product_id = products.id ORDER BY `purchases`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("purchases", {
                purchases: data,
                admin: req.session.admintab, user: req.session.username
            });
            // connection.end();
        });
    });
});
app.get('/products', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT products.id,products.product, categories.category FROM products, categories WHERE products.category_id = categories.id  ORDER BY `products`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("products", {
                products: data,
                admin: req.session.admintab, user: req.session.username
            });
            // connection.end();
        });
    });
});
app.get('/categories', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT categories.id, categories.category FROM categories", [], function(err, data) {
            if (err) return next(err);
            res.render("categories", {
                categories: data,
                admin: req.session.admintab, user: req.session.username
            });
            // connection.end();
        });
    });
});

app.get('/sale', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT sales.id,sales.date,sales.sold,sales.price, products.product FROM sales, products WHERE sales.product_id = products.id AND sales.sold > 0 ORDER BY `sales`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("salesU", {
                sales: data,
                admin: req.session.admintab, user: req.session.username

            });
           //  connection.end();
        });
    });
});


app.get('/purchase', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT purchases.id,purchases.date,purchases.cost, products.product, purchases.quantity FROM purchases, products WHERE purchases.product_id = products.id ORDER BY `purchases`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("purchasesU", {
                purchases: data,
                admin: req.session.admintab, user: req.session.username
            });
            // connection.end();
        });
    });
});
app.get('/product', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT products.id,products.product, categories.category FROM products, categories WHERE products.category_id = categories.id  ORDER BY `products`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("productsU", {
                products: data,
                admin: req.session.admintab, user: req.session.username
            });
            // connection.end();
        });
    });
});
app.get('/category', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT categories.id, categories.category FROM categories", [], function(err, data) {
            if (err) return next(err);
            res.render("categoriesU", {
                categories: data,
                admin: req.session.admintab, user: req.session.username
            });
            // connection.end();
        });
    });
});

app.get("/signup", function(req, res, next){
  req.getConnection(function(err, connection){
    connection = mysql.createConnection(dbOptions);
    if(err) return next(err);
      res.render("signup");
});
});
app.post('/signup', signup);
app.get("/login", function(req, res, next){
  req.getConnection(function(err, connection){
    connection = mysql.createConnection(dbOptions);
    if(err) return next(err);
    res.render("login");
  });
});
app.post('/login', login);

app.get("/logout", function (req, res, next){
delete req.session.username;
delete req.session.admintab;
res.redirect("/");
});
app.get('/users', function(req, res, next) {
    req.getConnection(function(err, connection) {
        connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT users.id, users.username, users.admin, users.locked FROM users", [], function(err, data) {
            if (err) return next(err);
            res.render("users", {
                users: data,
                admin: req.session.admintab,
                user: req.session.username
            });
            // connection.end();
        });
    });
});


app.get('/products/add', products.showAdd);
app.post('/products/add', products.add);
app.get('/products/delete/:id', products.delete);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);





app.get('/product/searchResults/:searchBox', products.search);
app.get('/products/searchResults/:searchBox', products.search);
app.post('/product/searchResults/', products.search);
app.post('/products/searchResults/', products.search);

app.get('/users/addUser', users.showAdd);
app.post('/users/addUser', users.add);
app.get('/users/delete/:id', users.delete);
app.get('/users/editUser/:id', users.get);
app.post('/users/update/:id', users.update);

app.get('/purchases/addPurchases', purchase.showAdd);
app.post('/purchases/addPurchases', purchase.add);
app.get('/purchases/delete/:id', purchase.delete);
app.get('/purchases/editPurchase/:id', purchase.get);
app.post('/purchases/update/:id', purchase.update);

app.get('/purchases/purchasesSearchResults/:searchBox', purchase.search);
app.post('/purchases/purchasesSearchResults/', purchase.search);

app.get('/sales/addSales', sales.showAdd);
app.post('/sales/addSales', sales.add);
app.get('/sales/delete/:id', sales.delete);
app.get('/sales/editSale/:id', sales.get);
app.post('/sales/update/:id', sales.update);

app.get('/sales/salesSearchResults/:searchBox', sales.search);
app.post('/sales/salesSearchResults/', sales.search);

app.get('/categories/addCategory', categories.showAdd);
app.post('/categories/addCategory', categories.add);
app.get('/categories/delete/:id', categories.delete);
app.get('/categories/editCategory/:id', categories.get);
app.post('/categories/update/:id', categories.update);

app.get('/categories/CategorySearchResults/:searchBox', categories.search);
app.post('/categories/CategorySearchResults/', categories.search);
app.get('/category/CategorySearchResults/:searchBox', categories.search);
app.post('/category/CategorySearchResults/', categories.search);



connection.query(usersTable, [], function(err, result) {
    if (err) throw err;
});

// conn.query(categoriesTable, [], function(err, result) {
//     if (err) throw err;
//     conn.query(productsTable, [], function(err, result) {
//         if (err) throw err;
//         conn.query(purchaseTable, [], function(err, result) {
//             if (err) throw err;
//             conn.query(salesTable, [], function(err, result) {
//                 if (err) throw err;
//                 conn.query(productsFK, [], function(err, result) {
//                     if (err) throw err;
//                     conn.query(purchaseFK, [], function(err, result) {
//                         if (err) throw err;
//                         conn.query(salesFK, [], function(err, result) {
//                             if (err) throw err;
//                             conn.end();
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });


app.use(errorHandler);

//start server
var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Spaza-Shop app listening at http://%s:%s', host, port);

});
