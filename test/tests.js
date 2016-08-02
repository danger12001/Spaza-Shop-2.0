var assert = require('assert');
var mysql = require('mysql');
var weeklySales = require('../routes/weeklySales');
var mostPopularProduct = require('../routes/mostPopularProduct');
var leastPopularProduct = require('../routes/leastPopularProduct');
var mostPopularCategory = require('../routes/mostPopularCategory');
var leastPopularCategory = require('../routes/leastPopularCategory');
var mostProfitableProduct = require('../routes/mostProfitableProduct');
var mostProfitableCategory = require('../routes/mostProfitableCategory');
var purchases = require("../routes/purchases");

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
describe("Purchases", function() {
  it("should return a map of all purchases", function() {
    var result = purchases.Purchases().length;
    assert.equal(result, 153);
  });
});

var ProductsDataService = require('../data-services/products-data-service');
var CategoriesDataService = require('../data-services/categories-data-service');
var SalesDataService = require('../data-services/sales-data-service');
var PurchasesDataService = require('../data-services/purchases-data-service');
var UserDataService = require('../data-services/user-data-service');
var password = process.env.MYSQL_PWD !== undefined ? process.env.MYSQL_PWD : '5550121a';
describe('ProductsDataService', function() {
  //
  var dbOptions = {
    host: '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: password,
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);

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
    // var data = [19, "Milk 2ls", 6, 9];
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


describe('CategoriesDataService', function() {
  var dbOptions = {
    host: '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: password,
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);

  it("showCategory should return all categories", function(done) {
    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.showCategory()
      .then(function(category) {
        assert.equal(category.length, 9);
        done();

      })
      .catch(function(err) {
        done(err);
      });
  });

  it("searchCategory should return all categories similar to the searchValue", function(done) {
    var categoryDataService = new CategoriesDataService(connection);
    var searchVal = "%Canned%";
    categoryDataService.searchCategory(searchVal).then(function(category) {
        assert.equal(category[0].category, "Canned Goods");
        done();

      })
      .catch(function(err) {
        done(err);
      });
  });

  it('getCategory should return a specific category', function(done) {
    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.getCategory(3)
      .then(function(category) {
        assert.equal('Canned Goods', category[0].category);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('addCategory should add an category', function(done) {

    // var data = [10, "Test"];
    var data = {
      id: 10,
      category: "Test",
    };

    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.addCategory(data)
      .then(function(rows) {
        var test = rows.affectedRows;
        assert.equal(test, 1);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('updateCategory should update a products data', function(done) {
    var data = {
      category: "test"
    };

    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.updateCategory(10, data)
      .then(function(rows) {
        var test = rows.changedRows;
        assert.equal(test, 1);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });
  //
  it('deleteCategory should remove a product', function(done) {
    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.deleteCategory(10)
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

describe('SalesDataService', function() {
  var dbOptions = {
    host: '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: password,
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);
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

describe('PurchasesDataService', function() {
  var dbOptions = {
    host: '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: password,
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);
  it("showPurchase should return all purchases", function(done) {
    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.showPurchase()
      .then(function(purchase) {
        assert.equal(purchase.length, 153);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it("searchPurchase should return all purchases similar to searchVal", function(done) {
    var purchasesDataService = new PurchasesDataService(connection);
    var searchVal = "%bread%";
    purchasesDataService.searchPurchase(searchVal)

    .then(function(purchase) {
        assert.equal(purchase.length, 18);
        done();
      })
      .catch(function(err) {
        done(err);
      });

  });
  //
  //
  it('getPurchase should return a specific Purchase', function(done) {
    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.getPurchase(1)
      .then(function(purchase) {
        assert.equal(4, purchase[0].product_id);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });
  it('addPurchase should add a Purchase', function(done) {

    var data = {
      id: 154,
      date: 2001 - 03 - 01,
      quantity: 11,
      cost: 12,
      product_id: 3
    }

    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.addPurchase(data)
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
  it('updatePurchase should update a Purchases data', function(done) {
    var data = {
      date: 2001 - 03 - 01,
      quantity: 12,
      cost: 4,
      product_id: 4
    };

    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.updatePurchase(154, data).then(function(rows) {
        var test = rows.affectedRows;
        assert.equal(test, 1);
        done();
      })
      .catch(function(err) {
        done(err);
      });

  });

  it('deletePurchase should remove a Purchase', function(done) {
    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.deletePurchase(154).then(function(rows) {
        var test = rows.affectedRows;
        assert.equal(test, 1);
        done();
      })
      .catch(function(err) {
        done(err);
      });

  });
});

describe('UserDataService', function() {
  var dbOptions = {
    host: '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: password,
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);

  it("showUser should return all users", function(done){
    var userDataService = new UserDataService(connection);
    userDataService.showUser()
    .then(function(result){
      assert.equal(result.length, 1);
      done();
    })
    .catch(function(err){
      done(err);
    });

  });
  it("searchUser should return all users that match searchVal", function(done){
    var userDataService = new UserDataService(connection);
    var searchVal = "%test%";
    userDataService.searchUser(searchVal)
    .then(function(result){
        assert.equal(result.length, 1);
        done();
      })
      .catch(function(err){
        done(err);
      });
  });

    it('addUser add a User', function(done) {

      var data = {
          id: 2,
          username: "testE",
          email: "test",
          password: "test",
          admin: 1,
          locked: 0
      };
      var userDataService = new UserDataService(connection);
      userDataService.addUser(data) .then(function(rows) {
          var test = rows.affectedRows;
          assert.equal(test, 1);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
  //
    it('getUser should return a specific User', function(done) {

      var userDataService = new UserDataService(connection);
      userDataService.getUser(1).then(function(user) {

          assert.equal('test', user[0].username);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
  //
    it('updateUser should update a Users data', function(done) {
      var data = {
        username: 6,
        Email: "Milk 2L",
        password: 10,
        admin: 1,
        locked: 0
      };
      var userDataService = new UserDataService(connection);
      userDataService.updateUser(2, data).then(function(rows) {
          var test = rows.affectedRows;
          assert.equal(test, 1);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
  //
    it('deleteUser should remove a User', function(done) {
      var userDataService = new UserDataService(connection);
      userDataService.deleteUser(2) .then(function(rows) {
          var test = rows.affectedRows;
          assert.equal(test, 1);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });








});
