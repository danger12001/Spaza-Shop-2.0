// var  bodyParser = require('body-parser');

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from categories', [], function(err, categories) {
        	if (err) return next(err);
    		res.render( 'add', {
					categories : categories,
    		});
      	});
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
			category_id : Number(req.body.category_id),
      		product : req.body.product,
			// price : Number(req.body.price)
  		};

		connection.query('insert into products set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/products');
		});
	});
};
exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM categories', [id], function(err, categories){
			if(err) return next(err);
			connection.query('SELECT * FROM products WHERE id = ?', [id], function(err,products){
				if(err) return next(err);
				var product = products[0];
				categories = categories.map(function(category){
					category.selected = category.id === product.category_id ? "selected" : "";
					return category;
				});
				res.render('edit', {
					categories : categories,
					data : product
				});
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = {
		category_id : Number(req.body.category_id),
		product : req.body.product,
		// price : Number(req.body.price)
	};
  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE products SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/products');
		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM products WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/products');
		});
	});
};

exports.search = function(req, res, next) {
    req.getConnection(function(err, connection) {
        var searchBox = '%' + req.body.searchBox + '%';
				// console.log(searchBox);

        connection.query('SELECT products.id,products.product, categories.category FROM products, categories WHERE products.category_id = categories.id AND products.product LIKE ?', [searchBox], function(err, results) {
					// console.log(results);
            if (err) return next(err);
            res.render('searchResults', {
                search: results
                // layout: false
            });
        });
				// console.log(search);
    });
};
