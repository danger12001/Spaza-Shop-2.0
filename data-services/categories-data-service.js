var queryBuilder = require('./queryBuilder');


module.exports = function(connection) {
  var QueryService = new queryBuilder(connection);

  this.showCategory = function(cb, err) {
    return QueryService.runQuery('SELECT * from categories');
  };
  this.searchCategory = function(searchVal, cb, err) {
    return QueryService.runQuery('SELECT * FROM categories WHERE categories.category LIKE ?', [searchVal]);
  };


  this.getCategory = function(id) {

    return QueryService.runQuery('select * from categories where id = ?', [id]);
  };

  this.updateCategory = function(id, edit) {

    return QueryService.runQuery('UPDATE categories SET ? WHERE id = ?', [edit, id]);
  };

  this.addCategory = function(data) {

    return QueryService.runQuery('INSERT INTO categories SET ?', [data]);
  };

  this.deleteCategory = function(id) {

    return QueryService.runQuery('DELETE FROM categories WHERE id = ?', id);
  };

};
