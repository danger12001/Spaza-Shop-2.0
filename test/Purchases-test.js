var assert = require('assert');
var purchases = require("../routes/purchases");
module.exports = function(){




  describe("Purchases", function() {
    it("should return a map of all purchases", function() {
      var result = purchases.Purchases().length;
      assert.equal(result, 153);
    });
  });
};
