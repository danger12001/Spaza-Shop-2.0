var queryBuilder = require('./queryBuilder');

module.exports = function(connection){
  var QueryService = new queryBuilder(connection);
  this.showSale = function(cb,err){
    // connection.query("SELECT DATE_FORMAT(sales.date,'%d %b') as date,sales.id, sales.product_id, sales.sold, sales.price ,products.product FROM sales, products WHERE sales.product_id = products.id AND sales.sold > 0  ORDER BY `sales`.`date` ASC", function(err, result) {
    //   if (err) throw err;
    //   if(result && result.length > 0){
    //     return result;
    //   }
    //   cb(err, "There are no Sales!");
    // });
    return QueryService.runQuery("SELECT DATE_FORMAT(sales.date,'%d %b') as date,sales.id, sales.product_id, sales.sold, sales.price ,products.product FROM sales, products WHERE sales.product_id = products.id AND sales.sold > 0  ORDER BY `sales`.`date` ASC");
  };


  this.searchSale = function( searchVal,cb, err){
    // connection.query("SELECT DATE_FORMAT(sales.date,'%d %b') as date,sales.id, products.product, categories.category, sales.sold, sales.price FROM  sales	INNER JOIN products ON sales.product_id = products.id  INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ? ORDER BY `sales`.`date` ASC", [searchVal, searchVal], function(err, result){
    //   if (err) throw err;
    //   if(result.length > 0){
    //     return result[0];
    //   }
    //   cb(err, "There are no sales similar to your query!");
    // });
    return QueryService.runQuery("SELECT DATE_FORMAT(sales.date,'%d %b') as date,sales.id, products.product, categories.category, sales.sold, sales.price FROM  sales	INNER JOIN products ON sales.product_id = products.id  INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ? ORDER BY `sales`.`date` ASC", [searchVal, searchVal]);
  };
    this.getSale = function(id, cb, err){
        // if (err) throw err;
        // connection.query('select * from sales where id = ?', id, function(err, sales){
        //     if (sales && sales.length > 0){
        //         return sales[0];
        //     }
        //     cb(err, "There are no sale with that ID");
        // });
        return QueryService.runQuery('select * from sales where id = ?', id);
    };
    this.updateSale = function(id,edit) {
      // connection.query('UPDATE sales SET ? WHERE id = ?', [ edit , id], function(err, rows) {
      //   if (err) throw err;
      // });
return QueryService.runQuery('UPDATE sales SET ? WHERE id = ?', [ edit , id]);
    };

    this.addSale = function(data){
      // connection.query('INSERT INTO sales (id, date, product_id,sold,price) VALUES ?', [data], function(err, rows){
      //   if (err) throw err;
      //   });
        return QueryService.runQuery('INSERT INTO sales (id, date, product_id,sold,price) VALUES ?', [data]);
    };

    this.deleteSale = function(id){
    // connection.query('DELETE FROM sales WHERE id = ?', id, function(err, rows) {
    //   if (err) throw err;
    // });
    return QueryService.runQuery('DELETE FROM sales WHERE id = ?', id);
    };
};
