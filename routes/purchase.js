// var  bodyParser = require('body-parser');

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from purchases, products', [], function(err, purchases) {
        	if (err) return next(err);
    		res.render( 'addPurchases', {
					purchases : purchases,
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
      quantity: Number(req.body.quantity),
      cost: Number(req.body.cost),
			product_id : Number(req.body.product_id),
  		};
		connection.query('insert into purchases set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/purchases');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM purchases, products', [id], function(err, purchases){
			if(err) return next(err);
			connection.query('SELECT * FROM purchases WHERE id = ?', [id], function(err,products){
				if(err) return next(err);
				var product = products[0];
				purchases = purchases.map(function(purchase){
					purchase.selected = purchases.product_id === product.id ? "selected" : "";
					return purchase;
				});
				res.render('editPurchase', {
					purchases : purchases,
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
		quantity: Number(req.body.quantity),
		cost: Number(req.body.cost),
		product_id : Number(req.body.product_id),
		};
		var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE purchases SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/purchases');
		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM purchases WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/purchases');
		});
	});
};

exports.search = function(req, res, next) {
	var searchBox = '%' + req.body.search + '%';
    req.getConnection(function(err, connection) {
        connection.query(					'SELECT purchases.id, purchases.date, products.product, categories.category,purchases.quantity, purchases.cost FROM  purchases INNER JOIN products ON purchases.product_id = products.id INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ?', [searchBox, searchBox], function(err, results) {
					// console.log(results);

            if (err) return next(err);
						// connection.query('SELECT categories.id,categories.category FROM  categories WHERE categories.category LIKE ?', [searchBox], function(err, cat) {
							// if (err) return next(err);

            res.render('purchasesSearchResults', {
                search: results,
								// category: cat,
								admin: req.session.admintab, user: req.session.username

                // layout: false
            });
        // });
			});
				// console.log(search);
    });
};
