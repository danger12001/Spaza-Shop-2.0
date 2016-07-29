var queryBuilder = require('./queryBuilder');

module.exports = function(connection) {
  var QueryService = new queryBuilder(connection);
  this.showSale = function(cb, err) {

    return QueryService.runQuery("SELECT DATE_FORMAT(sales.date,'%d %b') as date,sales.id, sales.product_id, sales.sold, sales.price ,products.product FROM sales, products WHERE sales.product_id = products.id  ORDER BY `sales`.`date` ASC");
  };


  this.searchSale = function(searchVal, cb, err) {

    return QueryService.runQuery("SELECT DATE_FORMAT(sales.date,'%d %b') as date,sales.id, products.product, categories.category, sales.sold, sales.price FROM  sales	INNER JOIN products ON sales.product_id = products.id  INNER JOIN categories ON products.category_id = categories.id WHERE products.product LIKE ? OR categories.category LIKE ? ORDER BY `sales`.`date` ASC", [searchVal, searchVal]);
  };
  this.getSale = function(id, cb, err) {

    return QueryService.runQuery('select * from sales where id = ?', id);
  };
  this.updateSale = function(id, edit) {

    return QueryService.runQuery('UPDATE sales SET ? WHERE id = ?', [edit, id]);
  };

  this.addSale = function(data) {

    return QueryService.runQuery('INSERT INTO sales SET ?', [data]);
  };

  this.deleteSale = function(id) {
    return QueryService.runQuery('DELETE FROM sales WHERE id = ?', id);
  };
};
