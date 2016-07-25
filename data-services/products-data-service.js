var queryBuilder = require('./queryBuilder');


module.exports = function(connection) {
  var QueryService = new queryBuilder(connection);


  this.showProduct = function(cb, err) {

    return QueryService.runQuery("SELECT products.id,products.product,products.price, categories.category FROM products, categories WHERE products.category_id = categories.id  ORDER BY `products`.`id` ASC ");

  };


  this.searchProduct = function(searchVal, cb, err) {

    return QueryService.runQuery('SELECT products.id, products.product, categories.category FROM products INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ?', [searchVal, searchVal]);
  };
  this.addProduct = function(data) {

    return QueryService.runQuery('INSERT INTO products (id, product, category_id, price) VALUES ?', [data]);
  };
  this.getProduct = function(productId, cb, err) {

    return QueryService.runQuery('select * from products where id = ?', productId);
  };



  this.updateProduct = function(edit, productId) {

    return QueryService.runQuery('UPDATE products SET ? WHERE id = ?', [edit, productId]);
  };


  this.deleteProduct = function(productId) {

    return QueryService.runQuery('DELETE FROM products WHERE id = ?', productId);
  };


};
