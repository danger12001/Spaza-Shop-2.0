module.exports = function(connection){
    this.getCategory = function(id, cb, err){
        if (err) return cb(err, null);
        connection.query('select * from categories where id = ?', id, function(err, categories){
            if (categories && categories.length > 0){
                return cb(null, categories[0]);
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
