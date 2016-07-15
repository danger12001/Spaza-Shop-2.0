module.exports = function(connection){
    this.getUser = function(id, cb, err){
        if (err) return cb(err, null);
        connection.query('select * from users where id = ?', id, function(err, users){
            if (users && users.length > 0){
                return cb(null, users[0]);
            }
            cb(err, err);
        });
    };
    this.updateUser = function(id,edit) {
      connection.query('UPDATE users SET ? WHERE id = ?', [ edit , id], function(err, rows) {
        if (err) throw err;
      });

    };

    this.addUser = function(data){
      connection.query('INSERT INTO users (id, category) VALUES ?', [data], function(err, rows){
        if (err) throw err;
        });
    };

    this.deleteUser = function(id){
    connection.query('DELETE FROM users WHERE id = ?', id, function(err, rows) {
      if (err) throw err;
    });
    };

};
