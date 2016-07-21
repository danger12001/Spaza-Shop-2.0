var queryBuilder = require('./queryBuilder');


module.exports = function(connection){
  var QueryService = new queryBuilder(connection);

  this.showCategory = function(cb, err){
      // connection.query('SELECT * from categories', function(err, categories){
      //   if(err) throw err;
      //     if (categories && categories.length > 0){
      //         return categories;
      //     }
      //     cb(err, "There are no categories");
      // });
      return QueryService.runQuery('SELECT * from categories');
  };
this.searchCategory = function(searchVal, cb, err){
      // connection.query('SELECT * FROM categories WHERE  categories.category LIKE ?', [searchVal], function(err, result) {
      //   if(err) throw err;
      //   if(result.length > 0){
      //     return result[0];
      //   }
      //   cb(err, "There are no categories similar to your query!");
      // });
      return QueryService.runQuery('SELECT * FROM categories WHERE  categories.category LIKE ?', [searchVal]);
};


    this.getCategory = function(id, cb, err){
        // connection.query('select * from categories where id = ?', id, function(err, categories){
        //     if (categories && categories.length > 0){
        //         return categories[0];
        //     }
        //     cb(err, "There are no categories with that ID");
        // });
        return QueryService.runQuery('select * from categories where id = ?', id);
    };
    this.updateCategory = function(id,edit) {
      // connection.query('UPDATE categories SET ? WHERE id = ?', [ edit , id], function(err, rows) {
      //   if (err) throw err;
      // });
return QueryService.runQuery('UPDATE categories SET ? WHERE id = ?', [ edit , id]);
    };

    this.addCategory = function(data){
      // connection.query('INSERT INTO categories (id, category) VALUES ?', [data], function(err, rows){
      //   if (err) throw err;
      //   });
        return QueryService.runQuery('INSERT INTO categories (id, category) VALUES ?', [data]);
    };

    this.deleteCategory = function(id){
    // connection.query('DELETE FROM categories WHERE id = ?', id, function(err, rows) {
    //   if (err) throw err;
    // });
    return QueryService.runQuery('DELETE FROM categories WHERE id = ?', id);
    };








    //end
};
