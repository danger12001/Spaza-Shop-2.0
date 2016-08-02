var ProductsDataService = require('../data-services/products-data-service');
var assert = require('assert');

module.exports = function(connection){


describe('ProductsDataService', function() {
  //

  it('showProduct should show all products', function(done) {
    var productsDataService = new ProductsDataService(connection);
    productsDataService
      .showProduct()
      .then(function(products) {
        assert.equal(products.length, 18);
        done();
      })
      .catch(function(err) {
        done(err);
      });

  });
  //
  it("searchProduct should return all products that matches searchValue", function(done) {
    var productsDataService = new ProductsDataService(connection);
    var searchVal = "%Coke%";
    productsDataService
      .searchProduct(searchVal)
      .then(function(product) {
        assert.equal(product[0].product, "Coke 500ml");
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });
  //
  it('getProduct should return a specific product', function(done) {

    var productsDataService = new ProductsDataService(connection);
    productsDataService.getProduct(10)
      .then(function(product) {
        assert.equal('Milk 1l', product[0].product);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('addProduct should add a product to the DB', function(done) {
    var data = {
      id: 19,
      category_id: 6,
      product: "Milk 2ls",
      price: 9
    };
    var productsDataService = new ProductsDataService(connection);
    productsDataService.addProduct(data)
      .then(function(rows) {
        var test = rows.affectedRows;
        assert.equal(test, 1);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('updateProduct should update a products data', function(done) {
    var data = {
      category_id: 6,
      product: "Milk 2L",
      price: 10
    };
    var productsDataService = new ProductsDataService(connection);
    productsDataService.updateProduct(data, 19)
      .then(function(rows) {
        var test = rows.changedRows;
        assert.equal(test, 1);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });


  it('deleteProduct should remove a product', function(done) {
    var productsDataService = new ProductsDataService(connection);
    productsDataService.deleteProduct(19)
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
