var assert = require('assert');
var CategoriesDataService = require('../data-services/categories-data-service');
module.exports = function(connection){
  describe('CategoriesDataService', function() {

    it("showCategory should return all categories", function(done) {
      var categoryDataService = new CategoriesDataService(connection);
      categoryDataService.showCategory()
        .then(function(category) {
          assert.equal(category.length, 9);
          done();

        })
        .catch(function(err) {
          done(err);
        });
    });

    it("searchCategory should return all categories similar to the searchValue", function(done) {
      var categoryDataService = new CategoriesDataService(connection);
      var searchVal = "%Canned%";
      categoryDataService.searchCategory(searchVal).then(function(category) {
          assert.equal(category[0].category, "Canned Goods");
          done();

        })
        .catch(function(err) {
          done(err);
        });
    });

    it('getCategory should return a specific category', function(done) {
      var categoryDataService = new CategoriesDataService(connection);
      categoryDataService.getCategory(3)
        .then(function(category) {
          assert.equal('Canned Goods', category[0].category);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });

    it('addCategory should add an category', function(done) {

      // var data = [10, "Test"];
      var data = {
        id: 10,
        category: "Test",
      };

      var categoryDataService = new CategoriesDataService(connection);
      categoryDataService.addCategory(data)
        .then(function(rows) {
          var test = rows.affectedRows;
          assert.equal(test, 1);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });

    it('updateCategory should update a products data', function(done) {
      var data = {
        category: "test"
      };

      var categoryDataService = new CategoriesDataService(connection);
      categoryDataService.updateCategory(10, data)
        .then(function(rows) {
          var test = rows.changedRows;
          assert.equal(test, 1);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    //
    it('deleteCategory should remove a product', function(done) {
      var categoryDataService = new CategoriesDataService(connection);
      categoryDataService.deleteCategory(10)
        .then(function(rows) {
          var test = rows.changedRows;
          assert.equal(test, 0);
          done();
        })
        .catch(function(err) {
          done(err);
        });

    });
  });


};
