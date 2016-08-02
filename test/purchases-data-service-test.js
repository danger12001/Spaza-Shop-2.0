var assert = require('assert');
var PurchasesDataService = require('../data-services/purchases-data-service');
module.exports = function(connection){
  describe('PurchasesDataService', function() {
    it("showPurchase should return all purchases", function(done) {
      var purchasesDataService = new PurchasesDataService(connection);
      purchasesDataService.showPurchase()
        .then(function(purchase) {
          assert.equal(purchase.length, 153);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });

    it("searchPurchase should return all purchases similar to searchVal", function(done) {
      var purchasesDataService = new PurchasesDataService(connection);
      var searchVal = "%bread%";
      purchasesDataService.searchPurchase(searchVal)

      .then(function(purchase) {
          assert.equal(purchase.length, 18);
          done();
        })
        .catch(function(err) {
          done(err);
        });

    });
    //
    //
    it('getPurchase should return a specific Purchase', function(done) {
      var purchasesDataService = new PurchasesDataService(connection);
      purchasesDataService.getPurchase(1)
        .then(function(purchase) {
          assert.equal(4, purchase[0].product_id);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('addPurchase should add a Purchase', function(done) {

      var data = {
        id: 154,
        date: 2001 - 03 - 01,
        quantity: 11,
        cost: 12,
        product_id: 3
      };

      var purchasesDataService = new PurchasesDataService(connection);
      purchasesDataService.addPurchase(data)
        .then(function(rows) {
          var test = rows.affectedRows;
          assert.equal(test, 1);
          done();
        })
        .catch(function(err) {
          done(err);
        });

    });
    //
    //
    it('updatePurchase should update a Purchases data', function(done) {
      var data = {
        date: 2001 - 03 - 01,
        quantity: 12,
        cost: 4,
        product_id: 4
      };

      var purchasesDataService = new PurchasesDataService(connection);
      purchasesDataService.updatePurchase(154, data).then(function(rows) {
          var test = rows.affectedRows;
          assert.equal(test, 1);
          done();
        })
        .catch(function(err) {
          done(err);
        });

    });

    it('deletePurchase should remove a Purchase', function(done) {
      var purchasesDataService = new PurchasesDataService(connection);
      purchasesDataService.deletePurchase(154).then(function(rows) {
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
