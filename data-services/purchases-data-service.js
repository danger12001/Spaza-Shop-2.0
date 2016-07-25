var queryBuilder = require('./queryBuilder');

module.exports = function(connection) {
  var QueryService = new queryBuilder(connection);
  this.showPurchase = function(cb, err) {

    return QueryService.runQuery("SELECT DATE_FORMAT(purchases.date,'%d %b') as date,purchases.id, purchases.product_id, purchases.quantity, purchases.cost ,products.product FROM purchases, products WHERE purchases.product_id = products.id  ORDER BY `purchases`.`date` ASC");
  };


  this.searchPurchase = function(searchVal, cb, err) {

    return QueryService.runQuery("SELECT DATE_FORMAT(purchases.date,'%d %b') as date,purchases.id, products.product, categories.category, purchases.quantity, purchases.cost FROM  purchases	INNER JOIN products ON purchases.product_id = products.id INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ? ORDER BY `purchases`.`date` ASC", [searchVal, searchVal]);
  };



  this.getPurchase = function(id, cb, err) {

    return QueryService.runQuery('select * from purchases where id = ?', id);
  };
  this.updatePurchase = function(id, edit) {

    return QueryService.runQuery('UPDATE purchases SET ? WHERE id = ?', [edit, id]);
  };

  this.addPurchase = function(data) {

    return QueryService.runQuery('INSERT INTO purchases (id, date, quantity,cost,product_id) VALUES ?', [data]);
  };

  this.deletePurchase = function(id) {

    return QueryService.runQuery('DELETE FROM purchases WHERE id = ?', id);
  };
};
