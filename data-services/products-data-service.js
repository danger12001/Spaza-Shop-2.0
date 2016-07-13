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
        this.showProduct = function(cb) {
          connection.query("SELECT products.id,products.product,products.price, categories.category FROM products, categories WHERE products.category_id = categories.id  ORDER BY `products`.`id` ASC ", [], function(err, products) {
                if (err) return cb(err, null);
                if (products && products.length > 0) {
                    return cb(null, products);
                }
                cb(err, "There are no products");
            });
        };
};
