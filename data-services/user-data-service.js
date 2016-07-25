var queryBuilder = require('./queryBuilder');

module.exports = function(connection){
    var QueryService = new queryBuilder(connection);
  this.showUser = function(cb,err){
    // connection.query('SELECT * FROM users', function(err, result) {
    //   if (err) throw err;
    //   if(result && result.length > 0){
    //     return result;
    //   }
    //   cb(err, "There are no users!");
    // });
    return QueryService.runQuery('SELECT * FROM users');
  };


  this.searchUser = function( searchVal,cb, err){
    // connection.query('SELECT * FROM users WHERE users.username LIKE ?', [searchVal], function(err, result){
    //   if (err) throw err;
    //   if(result.length > 0){
    //     return result[0];
    //   }
    //   cb(err, "There are no users similar to your query!");
    // });
    return QueryService.runQuery('SELECT * FROM users WHERE users.username LIKE ?', [searchVal]);
  };



    this.getUser = function(id, err){
        // connection.query('select * from users where id = ?', id, function(err, users){
        //     if (users && users.length > 0){
        //         return users[0];
        //     }
        //       cb(err, "There are no users with that ID");
        // });
        return QueryService.runQuery('select * from users where id = ?', id);
    };
    this.updateUser = function(id,edit) {
      // connection.query('UPDATE users SET ? WHERE id = ?', [ edit , id], function(err, rows) {
      //   if (err) throw err;
      // });
return QueryService.runQuery('UPDATE users SET ? WHERE id = ?', [ edit , id]);
    };

    this.addUser = function(data){
      // connection.query('INSERT INTO users (id, category) VALUES ?', [data], function(err, rows){
      //   if (err) throw err;
      //   });
        return QueryService.runQuery('INSERT INTO users (id, username, Email, password, admin, locked) VALUES ?', [data]);
    };

    this.deleteUser = function(id){
    // connection.query('DELETE FROM users WHERE id = ?', id, function(err, rows) {
    //   if (err) throw err;
    // });
    return QueryService.runQuery('DELETE FROM users WHERE id = ?', id);
    };

};
