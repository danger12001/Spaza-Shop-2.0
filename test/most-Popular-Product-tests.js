var assert = require('assert');
var mostPopularProduct = require('../routes/mostPopularProduct');
module.exports = function(){
  describe("mostPopularProduct", function() {
    it("should return the most popular product of week 1", function() {
      var result = mostPopularProduct.mostPopularProduct(1);
      assert.equal(result, "Bananas - loose");
    });
    it("should return the most popular product of week 2", function() {
      var result = mostPopularProduct.mostPopularProduct(2);
      assert.equal(result, "Mixed Sweets 5s");
    });
    it("should return the most popular product of week 3", function() {
      var result = mostPopularProduct.mostPopularProduct(3);
      assert.equal(result, "Mixed Sweets 5s");
    });
    it("should return the most popular product of week 4", function() {
      var result = mostPopularProduct.mostPopularProduct(4);
      assert.equal(result, "Coke 500ml");
    });
  });
};
