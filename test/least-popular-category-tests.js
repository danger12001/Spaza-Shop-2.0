var assert = require('assert');
var leastPopularCategory = require('../routes/leastPopularCategory');
module.exports = function(){
  describe("leastPopularCategory", function() {
    it("should return the least popular category of week 1", function() {
      var result = leastPopularCategory.leastPopularCategory(1);
      assert.equal(result, "Hygiene");
    });
    it("should return the least popular category of week 2", function() {
      var result = leastPopularCategory.leastPopularCategory(2);
      assert.equal(result, "Canned Goods");
    });
    it("should return the least popular category of week 3", function() {
      var result = leastPopularCategory.leastPopularCategory(3);
      assert.equal(result, "Canned Goods");
    });
    it("should return the least popular category of week 4", function() {
      var result = leastPopularCategory.leastPopularCategory(4);
      assert.equal(result, "Sweets");
    });
  });

};
