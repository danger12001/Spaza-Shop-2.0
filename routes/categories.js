// var  bodyParser = require('body-parser');

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from categories', [], function(err, categories) {
        	if (err) return next(err);
    		res.render( 'addCategory', {
					categories : categories,
    		});
      	});
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
      		category : req.body.category,
  		};

		connection.query('insert into categories set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/categories');
		});
	});
};
exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM categories', [id], function(err, categories){
			if(err) return next(err);
			connection.query('SELECT * FROM categories WHERE id = ?', [id], function(err,category){
				if(err) return next(err);
				var cat = category[0];
				categories = categories.map(function(category){
					return category;
				});
				res.render('editCategory', {
					categories : categories,
					data : cat
				});
			});
		});
	});
};

exports.update = function(req, res, next){

  var data = {
        category : req.body.category,
    };

  // console.log("test");
  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE categories SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('/categories');
		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM categories WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/categories');
		});
	});
};
