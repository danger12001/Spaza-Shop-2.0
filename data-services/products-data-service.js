module.exports = function(connection){

    this.getProduct = function(productId, cb, err){
        if (err) return cb(err, null);
        connection.query('select * from products where id = ?', productId, function(err, products){
            if (products && products.length > 0){
                return cb(null, products[0]);
            }
            cb(err, "There are no products with that ID");
        });
    };
        this.updateProduct = function(productId,edit) {
          connection.query('UPDATE products SET ? WHERE id = ?', [ edit , productId], function(err, rows) {
            if (err) throw err;
          });

        };

      this.addProduct = function(data){
          connection.query('INSERT INTO products (id, product, category_id, price) VALUES ?', [data], function(err, rows){
            if (err) throw err;
            });
      };

      this.deleteProduct = function(productId){
        connection.query('DELETE FROM products WHERE id = ?', productId, function(err, rows) {
          if (err) throw err;
        });
      };

    };
