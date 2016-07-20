module.exports = function(connection){
  this.showCategory = function(cb, err){
      connection.query('SELECT * from categories', function(err, categories){
        if(err) throw err;
          if (categories && categories.length > 0){
              return categories;
          }
          cb(err, "There are no categories");
      });
  };
this.searchCategory = function(searchVal, cb, err){
      connection.query('SELECT * FROM categories WHERE  categories.category LIKE ?', [searchVal], function(err, result) {
        if(err) throw err;
        if(result.length > 0){
          return result[0];
        }
        cb(err, "There are no categories similar to your query!");
      });
};


    this.getCategory = function(id, cb, err){
        connection.query('select * from categories where id = ?', id, function(err, categories){
            if (categories && categories.length > 0){
                return categories[0];
            }
            cb(err, "There are no categories with that ID");
        });
    };
    this.updateCategory = function(id,edit) {
      connection.query('UPDATE categories SET ? WHERE id = ?', [ edit , id], function(err, rows) {
        if (err) throw err;
      });

    };

    this.addCategory = function(data){
      connection.query('INSERT INTO categories (id, category) VALUES ?', [data], function(err, rows){
        if (err) throw err;
        });
    };

    this.deleteCategory = function(id){
    connection.query('DELETE FROM categories WHERE id = ?', id, function(err, rows) {
      if (err) throw err;
    });
    };








    //end
};
