var assert = require('assert');
var leastPopularProduct = require('../routes/leastPopularProduct');
module.exports = function(){
  describe("leastPopularProduct", function() {
    it("should return the least popular product of week 1", function() {
      var result = leastPopularProduct.leastPopularProduct(1);
      assert.equal(result, "Apples - loose");
    });
    it("should return the least popular product of week 2", function() {
      var result = leastPopularProduct.leastPopularProduct(2);
      assert.equal(result, "Shampoo 1 litre");
    });
    it("should return the least popular product of week 3", function() {
      var result = leastPopularProduct.leastPopularProduct(3);
      assert.equal(result, "Chakalaka Can");
    });
    it("should return the least popular product of week 4", function() {
      var result = leastPopularProduct.leastPopularProduct(4);
      assert.equal(result, "Bananas - loose");
    });
  });

};
