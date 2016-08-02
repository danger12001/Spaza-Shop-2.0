var assert = require('assert');
var mostPopularCategory = require('../routes/mostPopularCategory');
module.exports = function(){
  describe("mostPopularCategory", function() {
    it("should return the most popular category of week 1", function() {
      var result = mostPopularCategory.mostPopularCategory(1);
      assert.equal(result, "Fruit");
    });
    it("should return the most popular category of week 2", function() {
      var result = mostPopularCategory.mostPopularCategory(2);
      assert.equal(result, "Sweets");
    });
    it("should return the most popular category of week 3", function() {
      var result = mostPopularCategory.mostPopularCategory(3);
      assert.equal(result, "Sweets");
    });
    it("should return the most popular category of week 4", function() {
      var result = mostPopularCategory.mostPopularCategory(4);
      assert.equal(result, "Sweets");
    });
  });
};
