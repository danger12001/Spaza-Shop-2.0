var assert = require('assert');
var mostProfitableCategory = require('../routes/mostProfitableCategory');
module.exports = function(){
  describe("mostProfitableCategory", function() {
    it("should return the most profitable category of week 1", function() {
      var result = mostProfitableCategory.mostProfitableCategory(1);
      assert.equal(result, "Dairy");
    });
    it("should return the most profitable category of week 2", function() {
      var result = mostProfitableCategory.mostProfitableCategory(2);
      assert.equal(result, "Dairy");
    });
    it("should return the most profitable category of week 3", function() {
      var result = mostProfitableCategory.mostProfitableCategory(3);
      assert.equal(result, "Dairy");
    });
    it("should return the most profitable category of week 4", function() {
      var result = mostProfitableCategory.mostProfitableCategory(4);
      assert.equal(result, "Dairy");
    });
  });
};
