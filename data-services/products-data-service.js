var queryBuilder = require('./queryBuilder');


module.exports = function(connection){
var QueryService = new queryBuilder(connection);


    this.showProduct = function(cb,err){
      // connection.query("SELECT products.id,products.product,products.price, categories.category FROM products, categories WHERE products.category_id = categories.id  ORDER BY `products`.`id` ASC ", function(err, result) {
      //   if (err) throw err;
      //   if(result && result.length > 0){
      //     return result;
      return QueryService.runQuery("SELECT products.id,products.product,products.price, categories.category FROM products, categories WHERE products.category_id = categories.id  ORDER BY `products`.`id` ASC ");
      //   }
        // cb(err, "There are no products!");
      // });
    };


    this.searchProduct = function( searchVal,cb, err){
      // connection.query('SELECT products.id, products.product, categories.category FROM products INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ?', [searchVal, searchVal], function(err, result){
      //   if (err) throw err;
      //   if(result.length > 0){
      //     return result[0];
      //   }
      //   cb(err, "There are no products similar to your query!");
      // });
      return QueryService.runQuery('SELECT products.id, products.product, categories.category FROM products INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ?', [searchVal, searchVal]);
    };
    this.addProduct = function(data){
      // connection.query('INSERT INTO products (id, product, category_id, price) VALUES ?', [data], function(err, rows){
      //   if (err) throw err;
      //   });
      return QueryService.runQuery('INSERT INTO products (id, product, category_id, price) VALUES ?', [data]);
    };
    this.getProduct = function(productId, cb, err){
        // connection.query('select * from products where id = ?', productId, function(err, products){
        //   if (err) throw err;
        //     if (products && products.length > 0){
        //         return products[0];
        //     }
        //       cb(err, "There are no products with that ID");
        // });
        return QueryService.runQuery('select * from products where id = ?', productId);
    };



//         this.updateProduct = function(edit,productId) {
//           // connection.query('UPDATE products SET ? WHERE id = ?', [ edit , productId], function(err, rows) {
//           //   if (err) throw err;
//           // });
// return QueryService.runQuery('UPDATE products SET ? WHERE id = ?', [ edit , productId]);
//         };


      this.deleteProduct = function(productId){
        // connection.query('DELETE FROM products WHERE id = ?', productId, function(err, rows) {
        //   if (err) throw err;
        // });
return QueryService.runQuery('DELETE FROM `products` WHERE id = ?', productId);
      };


    };
