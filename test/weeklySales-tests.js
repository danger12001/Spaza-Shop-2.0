var assert = require('assert');
var weeklySales = require('../routes/weeklySales');
module.exports = function(){
  describe("weeklySales", function() {
    it("should return weekly sales for week 1", function() {
      var result = weeklySales.weeklySales(1).length;
      assert.equal(result, 104);
    });
    //more weeklySales Tests
    it("should return weekly sales for week 2", function() {
      var result = weeklySales.weeklySales(2).length;
      assert.equal(result, 117);
    });
    it("should return weekly sales for week 3", function() {
      var result = weeklySales.weeklySales(3).length;
      assert.equal(result, 104);
    });
    it("should return weekly sales for week 4", function() {
      var result = weeklySales.weeklySales(4).length;
      assert.equal(result, 119);
    });
  });
};
