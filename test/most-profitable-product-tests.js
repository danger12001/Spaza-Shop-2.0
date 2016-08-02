var assert = require('assert');
var mostProfitableProduct = require('../routes/mostProfitableProduct');
module.exports = function(){
  describe("mostProfitableProduct", function() {
    it("should return the most profitable product of week 1", function() {
      var result = mostProfitableProduct.mostProfitableProduct(1);
      assert.equal(result, "Imasi");
    });
    it("should return the most profitable product of week 2", function() {
      var result = mostProfitableProduct.mostProfitableProduct(2);
      assert.equal(result, "Imasi");
    });
    it("should return the most profitable product of week 3", function() {
      var result = mostProfitableProduct.mostProfitableProduct(3);
      assert.equal(result, "Imasi");
    });
    it("should return the most profitable product of week 4", function() {
      var result = mostProfitableProduct.mostProfitableProduct(4);
      assert.equal(result, "Imasi");
    });
  });
};
