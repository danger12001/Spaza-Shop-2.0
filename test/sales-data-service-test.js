var assert = require('assert');
var SalesDataService = require('../data-services/sales-data-service');
module.exports = function(connection){
  describe('SalesDataService', function() {

    it("showSale should return all sales", function(done) {

      var salesDataService = new SalesDataService(connection);
      salesDataService.showSale()
        .then(function(sale) {
          assert.equal(sale.length, 447);
          done();
        })
        .catch(function(err) {
          done(err);
        });

    });

    it("searchSale should return all Sales similar to the searchValue", function(done) {

      var searchVal = "%bread%";
      var salesDataService = new SalesDataService(connection);
      salesDataService.searchSale(searchVal)
        .then(function(sale) {
          assert.equal(sale.length, 58);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('getSale should return a specific sale', function(done) {
      var salesDataService = new SalesDataService(connection);
      salesDataService.getSale(3)
        .then(function(sale) {

          assert.equal(4, sale[0].product_id);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });


    it('addSale should add a sale', function(done) {

      var data = {
        id: 448,
        date: 2001 - 03 - 01,
        product_id: 11,
        sold: 12,
        price: 3
      };


      var salesDataService = new SalesDataService(connection);
      salesDataService.addSale(data)
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
    it('updateSale should update a sales data', function(done) {
      var data = {
        date: 2001 - 03 - 01,
        product_id: 4,
        sold: 12,
        price: 4
      };


      var salesDataService = new SalesDataService(connection);
      salesDataService.updateSale(448, data)
        .then(function(rows) {
          var test = rows.affectedRows;
          assert.equal(test, 1);
          done();
        })
        .catch(function(err) {
          done(err);
        });

    });

    it('deleteSale should remove a sale', function(done) {
      var salesDataService = new SalesDataService(connection);
      salesDataService.deleteSale(448)
        .then(function(rows) {
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
