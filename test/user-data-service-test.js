var assert = require('assert');
var UserDataService = require('../data-services/user-data-service');
module.exports = function(connection){
  describe('UserDataService', function() {
    it("showUser should return all users", function(done){
      var userDataService = new UserDataService(connection);
      userDataService.showUser()
      .then(function(result){
        assert.equal(result.length, 1);
        done();
      })
      .catch(function(err){
        done(err);
      });

    });
    it("searchUser should return all users that match searchVal", function(done){
      var userDataService = new UserDataService(connection);
      var searchVal = "%test%";
      userDataService.searchUser(searchVal)
      .then(function(result){
          assert.equal(result.length, 1);
          done();
        })
        .catch(function(err){
          done(err);
        });
    });

      it('addUser add a User', function(done) {

        var data = {
            id: 2,
            username: "testE",
            email: "test",
            password: "test",
            admin: 1,
            locked: 0
        };
        var userDataService = new UserDataService(connection);
        userDataService.addUser(data) .then(function(rows) {
            var test = rows.affectedRows;
            assert.equal(test, 1);
            done();
          })
          .catch(function(err) {
            done(err);
          });
      });
    //
      it('getUser should return a specific User', function(done) {

        var userDataService = new UserDataService(connection);
        userDataService.getUser(1).then(function(user) {

            assert.equal('test', user[0].username);
            done();
          })
          .catch(function(err) {
            done(err);
          });
      });
    //
      it('updateUser should update a Users data', function(done) {
        var data = {
          username: 6,
          Email: "Milk 2L",
          password: 10,
          admin: 1,
          locked: 0
        };
        var userDataService = new UserDataService(connection);
        userDataService.updateUser(2, data).then(function(rows) {
            var test = rows.affectedRows;
            assert.equal(test, 1);
            done();
          })
          .catch(function(err) {
            done(err);
          });
      });
    //
      it('deleteUser should remove a User', function(done) {
        var userDataService = new UserDataService(connection);
        userDataService.deleteUser(2) .then(function(rows) {
            var test = rows.affectedRows;
            assert.equal(test, 1);
            done();
          })
          .catch(function(err) {
            done(err);
          });
      });








  });
};
