var express = require('express');
var handlebars = require('express-handlebars');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require("fs");


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
var app = express();
var categoriesTable = String(fs.readFileSync("./sql/categoriesTable.sql"));
var productsTable = String(fs.readFileSync("./sql/productsTable.sql"));
var purchaseTable = String(fs.readFileSync("./sql/purchaseTable.sql"));
var salesTable = String(fs.readFileSync("./sql/salesTable.sql"));

var productsFK = String(fs.readFileSync("./sql/productsFK.sql"));
var purchaseFK = String(fs.readFileSync("./sql/purchaseFK.sql"));
var salesFK = String(fs.readFileSync("./sql/salesFK.sql"));

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
        error: err
    });
}
app.use(express.static("public"));
var dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '5550121',
    port: 3306,
    database: "Nelisa"
};
app.use(myConnection(mysql, dbOptions, 'single'));
// var connection = mysql.createConnection(dbOptions);
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5550121',
    // port: 3000,
    database: "Nelisa"
});

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//routes
app.get('/', function(req, res) {
    res.render("index");
});
app.get('/week1', function(req, res) {
    res.render("week1", week1);
});
app.get('/week2', function(req, res) {
    res.render("week2", week2);
});
app.get('/week3', function(req, res) {
    res.render("week3", week3);
});
app.get('/week4', function(req, res) {
    res.render("week4", week4);
});
app.get('/sales', function(req, res, next) {
    req.getConnection(function(err, connection) {
        // connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT sales.id,sales.date,sales.sold,sales.price, products.product FROM sales, products WHERE sales.product_id = products.id AND sales.sold > 0 ORDER BY `sales`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("sales", {
                sales: data
            });
            // connection.end();
        });
    });
});
app.get('/purchases', function(req, res, next) {
    req.getConnection(function(err, connection) {
        // connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT purchases.id,purchases.date,purchases.cost, products.product, purchases.quantity FROM purchases, products WHERE purchases.product_id = products.id ORDER BY `purchases`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("purchases", {
                purchases: data
            });
            // connection.end();
        });
    });
});
app.get('/products', function(req, res, next) {
    req.getConnection(function(err, connection) {
        // connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT products.id,products.product, categories.category FROM products, categories WHERE products.category_id = categories.id  ORDER BY `products`.`id` ASC ", [], function(err, data) {
            if (err) return next(err);
            res.render("products", {
                products: data
            });
            // connection.end();
        });
    });
});
app.get('/categories', function(req, res, next) {
    req.getConnection(function(err, connection) {
        // connection = mysql.createConnection(dbOptions);
        if (err) return next(err);
        connection.query("SELECT categories.id, categories.category FROM categories", [], function(err, data) {
            if (err) return next(err);
            res.render("categories", {
                categories: data
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

app.get('/purchases/addPurchases', purchase.showAdd);
app.post('/purchases/addPurchases', purchase.add);
app.get('/purchases/delete/:id', purchase.delete);
app.get('/purchases/editPurchase/:id', purchase.get);
app.post('/purchases/update/:id', purchase.update);

app.get('/sales/addSales', sales.showAdd);
app.post('/sales/addSales', sales.add);
app.get('/sales/delete/:id', sales.delete);
app.get('/sales/editSale/:id', sales.get);
app.post('/sales/update/:id', sales.update);

app.get('/categories/addCategory', categories.showAdd);
app.post('/categories/addCategory', categories.add);
app.get('/categories/delete/:id', categories.delete);
app.get('/categories/editCategory/:id', categories.get);
app.post('/categories/update/:id', categories.update);

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
