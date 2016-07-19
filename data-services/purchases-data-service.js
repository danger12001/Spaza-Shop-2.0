module.exports = function(connection){
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
