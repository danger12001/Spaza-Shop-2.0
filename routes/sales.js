// var  bodyParser = require('body-parser');
exports.show = function(req, res) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query("SELECT DATE_FORMAT(sales.date,'%d %b') as date,sales.id, sales.product_id, sales.sold, sales.price ,products.product FROM sales, products WHERE sales.product_id = products.id AND sales.sold > 0  ORDER BY `sales`.`date` ASC", [], function(err, sales) {
      if (err) return next(err);
      res.render('sales', {
        sales: sales,
        admin: req.session.admintab,
        user: req.session.username
      });
    });
  });
};
exports.showAdd = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query("SELECT * from sales, products", [], function(err, sales) {
      if (err) return next(err);
      res.render('addSales', {
        sales: sales,
        admin: req.session.admintab,
        user: req.session.username
      });
    });
  });
};

exports.add = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
  var price =  Number(req.body.price);
  var markup = Number(req.body.markup);
    var data = {
      date: new Date(req.body.date),
      product_id: Number(req.body.product_id),
      sold: Number(req.body.sold),
      price: price + markup
    };
    connection.query('insert into sales set ?', data, function(err, results) {
      if (err) return next(err);
      res.redirect('/sales');
    });
  });
};

exports.get = function(req, res, next) {
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    connection.query('SELECT * from sales, products', [id], function(err, sales) {
      if (err) return next(err);
      connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err, products) {
        if (err) return next(err);
        var product = products[0];
        sales = sales.map(function(sale) {
          sale.selected = sales.product_id === product.id ? "selected" : "";
          return sale;
        });
        res.render('editSale', {
          sales: sales,
          data: product,
          admin: req.session.admintab,
          user: req.session.username
        });
      });
    });
  });
};

exports.update = function(req, res, next) {

  var data = {
    date: new Date(req.body.date),
    product_id: Number(req.body.product_id),
    sold: Number(req.body.sold),
    price: Number(req.body.price),
  };
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/sales');
    });
  });
};

exports.delete = function(req, res, next) {
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    connection.query('DELETE FROM sales WHERE id = ?', [id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/sales');
    });
  });
};

exports.search = function(req, res, next) {
  req.getConnection(function(err, connection) {
    var searchVal = '%' + req.params.searchVal + '%';
    connection.query("SELECT DATE_FORMAT(sales.date,'%d %b') as date,sales.id, products.product, categories.category, sales.sold, sales.price FROM  sales	INNER JOIN products ON sales.product_id = products.id  INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ? ORDER BY `sales`.`date` ASC", [searchVal, searchVal], function(err, result) {
      if (err) return console.log(err);
      res.render('salesSearchResults', {
        search: result,
        admin: req.session.admintab,
        user: req.session.username,
        layout: false
      });
    });
  });
};
