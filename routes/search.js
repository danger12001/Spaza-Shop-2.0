exports.products = function(req, res, next){
  	req.getConnection(function(err, connection){
      var searchBar = "%" + req.params.searchBox + "%";
  		connection.query('SELECT * FROM categories', [id], function(err, categories){
  			if(err) return next(err);
  			connection.query('SELECT * FROM products WHERE products.product LIKE ?', [searchBar], function(err,products){
  				if(err) return next(err);
  				var product = products[0];
  				categories = categories.map(function(category){
  					category.selected = category.id === product.category_id ? "selected" : "";
  					return category;
  				});
  				res.render('searchResults', {
  					categories : categories,
  					result : product
  				});
  			});
  		});
  	});
};
