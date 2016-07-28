var queryBuilder = require('./queryBuilder');

module.exports = function(connection) {
  var QueryService = new queryBuilder(connection);
  this.showUser = function(cb, err) {

    return QueryService.runQuery('SELECT * FROM users');
  };


  this.searchUser = function(searchVal, cb, err) {

    return QueryService.runQuery('SELECT * FROM users WHERE users.username LIKE ?', [searchVal]);
  };



  this.getUser = function(id, err) {

    return QueryService.runQuery('select * from users where id = ?', id);
  };
  this.updateUser = function(id, edit) {

    return QueryService.runQuery('UPDATE users SET ? WHERE id = ?', [edit, id]);
  };

  this.addUser = function(data) {

    return QueryService.runQuery('INSERT INTO users SET ?', [data]);
  };


  this.deleteUser = function(id) {

    return QueryService.runQuery('DELETE FROM `users` WHERE id = ?', id);
  };

};
