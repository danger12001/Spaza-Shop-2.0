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
        this.showCategory = function(cb) {
          connection.query("SELECT * FROM categories", [], function(err, categories) {
                if (err) return cb(err, null);
                if (categories && categories.length > 0) {
                    return cb(null, categories);
                }
                cb(err, "There are no categories");
            });
        };
};
