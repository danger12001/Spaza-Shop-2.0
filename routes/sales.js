// var  bodyParser = require('body-parser');

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from sales, products', [], function(err, sales) {
        	if (err) return next(err);
    		res.render( 'addSales', {
					sales : sales,
					admin: req.session.admintab, user: req.session.username
    		});
      	});
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
      date: req.body.date,
      product_id : Number(req.body.product_id),
      sold: Number(req.body.sold),
      price: Number(req.body.price),
  		};
		connection.query('insert into sales set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/sales');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM sales, products', [id], function(err, sales){
			if(err) return next(err);
			connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err,products){
				if(err) return next(err);
				var product = products[0];
				sales = sales.map(function(sale){
					sale.selected = sales.product_id === product.id ? "selected" : "";
					return sale;
				});
				res.render('editSale', {
					sales : sales,
					data : product,
					admin: req.session.admintab, user: req.session.username
				});
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = {
    date: req.body.date,
    product_id : Number(req.body.product_id),
    sold: Number(req.body.sold),
    price: Number(req.body.price),
		};
		var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/sales');
		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM sales WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/sales');
		});
	});
};
exports.search = function(req, res, next) {
	var searchBox = '%' + req.body.search + '%';
    req.getConnection(function(err, connection) {
        connection.query('SELECT sales.id, sales.date, products.product, categories.category, sales.sold, sales.price FROM  sales	INNER JOIN products ON sales.product_id = products.id INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ?', [searchBox, searchBox], function(err, results) {
					// console.log(results);
            if (err) return next(err);
            res.render('salesSearchResults', {
                search: results,
								admin: req.session.admintab, user: req.session.username
                // layout: false
            });
        });
				// console.log(search);
    });
};
