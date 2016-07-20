module.exports = function(connection){
  this.showPurchase = function(cb,err){
    connection.query("SELECT DATE_FORMAT(purchases.date,'%d %b') as date,purchases.id, purchases.product_id, purchases.quantity, purchases.cost ,products.product FROM purchases, products WHERE purchases.product_id = products.id  ORDER BY `purchases`.`date` ASC", function(err, result) {
      if (err) throw err;
      if(result && result.length > 0){
        return result;
      }
      cb(err, "There are no purchases!");
    });
  };


  this.searchPurchase = function( searchVal,cb, err){
    connection.query("SELECT DATE_FORMAT(purchases.date,'%d %b') as date,purchases.id, products.product, categories.category, purchases.quantity, purchases.cost FROM  purchases	INNER JOIN products ON purchases.product_id = products.id INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ? ORDER BY `purchases`.`date` ASC", [searchVal, searchVal], function(err, result){
      console.log(result.length);
      if (err) throw err;
      if(result.length > 0){
        return result[0];
      }
      cb(err, "There are no purchases similar to your query!");
    });
  };



    this.getPurchase = function(id, cb, err){
        if (err) throw err;
        connection.query('select * from purchases where id = ?', id, function(err, purchases){
            if (purchases && purchases.length > 0){
                return purchases[0];
            }
            cb(err, "There are no purchases with that ID");
        });
    };
    this.updatePurchase = function(id,edit) {
      connection.query('UPDATE purchases SET ? WHERE id = ?', [ edit , id], function(err, rows) {
        if (err) throw err;
      });

    };

    this.addPurchase = function(data){
      connection.query('INSERT INTO purchases (id, date, quantity,cost,product_id) VALUES ?', [data], function(err, rows){
        if (err) throw err;
        });
    };

    this.deletePurchase = function(id){
    connection.query('DELETE FROM purchases WHERE id = ?', id, function(err, rows) {
      if (err) throw err;
    });
    };
};
