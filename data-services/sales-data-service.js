module.exports = function(connection){
    this.getSale = function(id, cb, err){
        if (err) throw err;
        connection.query('select * from sales where id = ?', id, function(err, sales){
            if (sales && sales.length > 0){
                return sales[0];
            }
            cb(err, "There are no sale with that ID");
        });
    };
    this.updateSale = function(id,edit) {
      connection.query('UPDATE sales SET ? WHERE id = ?', [ edit , id], function(err, rows) {
        if (err) throw err;
      });

    };

    this.addSale = function(data){
      connection.query('INSERT INTO sales (id, date, product_id,sold,price) VALUES ?', [data], function(err, rows){
        if (err) throw err;
        });
    };

    this.deleteSale = function(id){
    connection.query('DELETE FROM sales WHERE id = ?', id, function(err, rows) {
      if (err) throw err;
    });
    };
};
