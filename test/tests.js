var assert = require('assert');
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
    var result = weeklySales.weeklySales(1);
    assert.deepEqual(result, [{
        stockItem: 'Imasi',
        sold: 1,
        income: 25,
        date: '1-Feb'
      }, {
        stockItem: 'Bread',
        sold: 2,
        income: 12,
        date: '1-Feb'
      }, {
        stockItem: 'Chakalaka Can',
        sold: 3,
        income: 10,
        date: '1-Feb'
      }, {
        stockItem: 'Gold Dish Vegetable Curry Can',
        sold: 2,
        income: 9,
        date: '1-Feb'
      }, {
        stockItem: 'Fanta 500ml',
        sold: 3,
        income: 6.5,
        date: '1-Feb'
      }, {
        stockItem: 'Coke 500ml',
        sold: 2,
        income: 6.5,
        date: '1-Feb'
      }, {
        stockItem: 'Cream Soda 500ml',
        sold: 2,
        income: 7.5,
        date: '1-Feb'
      }, {
        stockItem: 'Iwisa Pap 5kg',
        sold: 0,
        income: 30,
        date: '1-Feb'
      }, {
        stockItem: 'Top Class Soy Mince',
        sold: 2,
        income: 12,
        date: '1-Feb'
      }, {
        stockItem: 'Shampoo 1 litre',
        sold: 1,
        income: 30,
        date: '1-Feb'
      }, {
        stockItem: 'Soap Bar',
        sold: 0,
        income: 6,
        date: '1-Feb'
      }, {
        stockItem: 'Bananas - loose',
        sold: 3,
        income: 2,
        date: '1-Feb'
      }, {
        stockItem: 'Apples - loose',
        sold: 5,
        income: 2,
        date: '1-Feb'
      }, {
        stockItem: 'Mixed Sweets 5s',
        sold: 9,
        income: 3,
        date: '1-Feb'
      }, {
        stockItem: 'Milk 1l',
        sold: 4,
        income: 10,
        date: '2-Feb'
      }, {
        stockItem: 'Imasi',
        sold: 4,
        income: 25,
        date: '2-Feb'
      }, {
        stockItem: 'Bread',
        sold: 5,
        income: 12,
        date: '2-Feb'
      }, {
        stockItem: 'Chakalaka Can',
        sold: 4,
        income: 10,
        date: '2-Feb'
      }, {
        stockItem: 'Gold Dish Vegetable Curry Can',
        sold: 5,
        income: 9,
        date: '2-Feb'
      }, {
        stockItem: 'Fanta 500ml',
        sold: 5,
        income: 6.5,
        date: '2-Feb'
      }, {
        stockItem: 'Coke 500ml',
        sold: 8,
        income: 6.5,
        date: '2-Feb'
      }, {
        stockItem: 'Cream Soda 500ml',
        sold: 4,
        income: 7.5,
        date: '2-Feb'
      }, {
        stockItem: 'Iwisa Pap 5kg',
        sold: 5,
        income: 30,
        date: '2-Feb'
      }, {
        stockItem: 'Top Class Soy Mince',
        sold: 3,
        income: 12,
        date: '2-Feb'
      }, {
        stockItem: 'Shampoo 1 litre',
        sold: 0,
        income: 30,
        date: '2-Feb'
      }, {
        stockItem: 'Soap Bar',
        sold: 2,
        income: 6,
        date: '2-Feb'
      }, {
        stockItem: 'Bananas - loose',
        sold: 0,
        income: 2,
        date: '2-Feb'
      }, {
        stockItem: 'Apples - loose',
        sold: 0,
        income: 2,
        date: '2-Feb'
      }, {
        stockItem: 'Mixed Sweets 5s',
        sold: 0,
        income: 3,
        date: '2-Feb'
      }, {
        stockItem: 'Milk 1l',
        sold: 7,
        income: 10,
        date: '3-Feb'
      }, {
        stockItem: 'Imasi',
        sold: 4,
        income: 25,
        date: '3-Feb'
      }, {
        stockItem: 'Bread',
        sold: 7,
        income: 12,
        date: '3-Feb'
      }, {
        stockItem: 'Chakalaka Can',
        sold: 4,
        income: 10,
        date: '3-Feb'
      }, {
        stockItem: 'Gold Dish Vegetable Curry Can',
        sold: 2,
        income: 9,
        date: '3-Feb'
      }, {
        stockItem: 'Fanta 500ml',
        sold: 5,
        income: 6.5,
        date: '3-Feb'
      }, {
        stockItem: 'Coke 500ml',
        sold: 8,
        income: 6.5,
        date: '3-Feb'
      }, {
        stockItem: 'Cream Soda 500ml',
        sold: 3,
        income: 7.5,
        date: '3-Feb'
      }, {
        stockItem: 'Iwisa Pap 5kg',
        sold: 3,
        income: 30,
        date: '3-Feb'
      }, {
        stockItem: 'Top Class Soy Mince',
        sold: 3,
        income: 12,
        date: '3-Feb'
      }, {
        stockItem: 'Shampoo 1 litre',
        sold: 0,
        income: 30,
        date: '3-Feb'
      }, {
        stockItem: 'Soap Bar',
        sold: 2,
        income: 6,
        date: '3-Feb'
      }, {
        stockItem: 'Bananas - loose',
        sold: 10,
        income: 2,
        date: '3-Feb'
      }, {
        stockItem: 'Apples - loose',
        sold: 8,
        income: 2,
        date: '3-Feb'
      }, {
        stockItem: 'Mixed Sweets 5s',
        sold: 15,
        income: 2,
        date: '3-Feb'
      }, {
        stockItem: 'Milk 1l',
        sold: 5,
        income: 10,
        date: '4-Feb'
      }, {
        stockItem: 'Imasi',
        sold: 8,
        income: 25,
        date: '4-Feb'
      }, {
        stockItem: 'Bread',
        sold: 8,
        income: 12,
        date: '4-Feb'
      }, {
        stockItem: 'Chakalaka Can',
        sold: 2,
        income: 10,
        date: '4-Feb'
      }, {
        stockItem: 'Gold Dish Vegetable Curry Can',
        sold: 0,
        income: 9,
        date: '4-Feb'
      }, {
        stockItem: 'Fanta 500ml',
        sold: 7,
        income: 6.5,
        date: '4-Feb'
      }, {
        stockItem: 'Coke 500ml',
        sold: 12,
        income: 6.5,
        date: '4-Feb'
      }, {
        stockItem: 'Cream Soda 500ml',
        sold: 2,
        income: 7.5,
        date: '4-Feb'
      }, {
        stockItem: 'Iwisa Pap 5kg',
        sold: 1,
        income: 30,
        date: '4-Feb'
      }, {
        stockItem: 'Top Class Soy Mince',
        sold: 4,
        income: 12,
        date: '4-Feb'
      }, {
        stockItem: 'Shampoo 1 litre',
        sold: 1,
        income: 30,
        date: '4-Feb'
      }, {
        stockItem: 'Soap Bar',
        sold: 3,
        income: 6,
        date: '4-Feb'
      }, {
        stockItem: 'Bananas - loose',
        sold: 16,
        income: 2,
        date: '4-Feb'
      }, {
        stockItem: 'Apples - loose',
        sold: 8,
        income: 2,
        date: '4-Feb'
      }, {
        stockItem: 'Mixed Sweets 5s',
        sold: 12,
        income: 2,
        date: '4-Feb'
      }, {
        stockItem: 'Milk 1l',
        sold: 10,
        income: 10,
        date: '5-Feb'
      }, {
        stockItem: 'Imasi',
        sold: 3,
        income: 25,
        date: '5-Feb'
      }, {
        stockItem: 'Bread',
        sold: 12,
        income: 12,
        date: '5-Feb'
      }, {
        stockItem: 'Chakalaka Can',
        sold: 3,
        income: 10,
        date: '5-Feb'
      }, {
        stockItem: 'Gold Dish Vegetable Curry Can',
        sold: 6,
        income: 9,
        date: '5-Feb'
      }, {
        stockItem: 'Fanta 500ml',
        sold: 3,
        income: 6.5,
        date: '5-Feb'
      }, {
        stockItem: 'Coke 500ml',
        sold: 9,
        income: 6.5,
        date: '5-Feb'
      }, {
        stockItem: 'Cream Soda 500ml',
        sold: 8,
        income: 7.5,
        date: '5-Feb'
      }, {
        stockItem: 'Iwisa Pap 5kg',
        sold: 2,
        income: 30,
        date: '5-Feb'
      }, {
        stockItem: 'Top Class Soy Mince',
        sold: 1,
        income: 12,
        date: '5-Feb'
      }, {
        stockItem: 'Shampoo 1 litre',
        sold: 0,
        income: 30,
        date: '5-Feb'
      }, {
        stockItem: 'Soap Bar',
        sold: 1,
        income: 6,
        date: '5-Feb'
      }, {
        stockItem: 'Bananas - loose',
        sold: 8,
        income: 2,
        date: '5-Feb'
      }, {
        stockItem: 'Apples - loose',
        sold: 12,
        income: 2,
        date: '5-Feb'
      }, {
        stockItem: 'Mixed Sweets 5s',
        sold: 5,
        income: 3,
        date: '5-Feb'
      }, {
        stockItem: 'Milk 1l',
        sold: 6,
        income: 10,
        date: '6-Feb'
      }, {
        stockItem: 'Imasi',
        sold: 4,
        income: 25,
        date: '6-Feb'
      }, {
        stockItem: 'Bread',
        sold: 7,
        income: 12,
        date: '6-Feb'
      }, {
        stockItem: 'Chakalaka Can',
        sold: 5,
        income: 10,
        date: '6-Feb'
      }, {
        stockItem: 'Gold Dish Vegetable Curry Can',
        sold: 2,
        income: 9,
        date: '6-Feb'
      }, {
        stockItem: 'Fanta 500ml',
        sold: 7,
        income: 6.5,
        date: '6-Feb'
      }, {
        stockItem: 'Coke 500ml',
        sold: 8,
        income: 6.5,
        date: '6-Feb'
      }, {
        stockItem: 'Cream Soda 500ml',
        sold: 3,
        income: 7.5,
        date: '6-Feb'
      }, {
        stockItem: 'Iwisa Pap 5kg',
        sold: 6,
        income: 30,
        date: '6-Feb'
      }, {
        stockItem: 'Top Class Soy Mince',
        sold: 8,
        income: 12,
        date: '6-Feb'
      }, {
        stockItem: 'Shampoo 1 litre',
        sold: 1,
        income: 30,
        date: '6-Feb'
      }, {
        stockItem: 'Soap Bar',
        sold: 3,
        income: 6,
        date: '6-Feb'
      }, {
        stockItem: 'Bananas - loose',
        sold: 2,
        income: 2,
        date: '6-Feb'
      }, {
        stockItem: 'Apples - loose',
        sold: 0,
        income: 2,
        date: '6-Feb'
      }, {
        stockItem: 'Mixed Sweets 5s',
        sold: 5,
        income: 3,
        date: '6-Feb'
      }, {
        stockItem: 'Milk 1l',
        sold: 4,
        income: 10,
        date: '7-Feb'
      }, {
        stockItem: 'Imasi',
        sold: 6,
        income: 25,
        date: '7-Feb'
      }, {
        stockItem: 'Bread',
        sold: 4,
        income: 12,
        date: '7-Feb'
      }, {
        stockItem: 'Chakalaka Can',
        sold: 2,
        income: 10,
        date: '7-Feb'
      }, {
        stockItem: 'Gold Dish Vegetable Curry Can',
        sold: 0,
        income: 9,
        date: '7-Feb'
      }, {
        stockItem: 'Fanta 500ml',
        sold: 3,
        income: 6.5,
        date: '7-Feb'
      }, {
        stockItem: 'Coke 500ml',
        sold: 7,
        income: 6.5,
        date: '7-Feb'
      }, {
        stockItem: 'Cream Soda 500ml',
        sold: 0,
        income: 7.5,
        date: '7-Feb'
      }, {
        stockItem: 'Iwisa Pap 5kg',
        sold: 0,
        income: 30,
        date: '7-Feb'
      }, {
        stockItem: 'Top Class Soy Mince',
        sold: 1,
        income: 12,
        date: '7-Feb'
      }, {
        stockItem: 'Shampoo 1 litre',
        sold: 0,
        income: 30,
        date: '7-Feb'
      }, {
        stockItem: 'Soap Bar',
        sold: 1,
        income: 6,
        date: '7-Feb'
      }, {
        stockItem: 'Bananas - loose',
        sold: 8,
        income: 2,
        date: '7-Feb'
      }, {
        stockItem: 'Apples - loose',
        sold: 3,
        income: 2,
        date: '7-Feb'
      }, {
        stockItem: 'Mixed Sweets 5s',
        sold: 3,
        income: 3,
        date: '7-Feb'
      }]

    );
  });
  //more weeklySales Tests


});
describe("mostPopularProduct", function() {
  it("should return the most popular product of week 1", function() {
    var result = mostPopularProduct.mostPopularProduct(1);
    assert.equal(result, "Bananas - loose");
  });
});


describe("leastPopularProduct", function() {
  it("should return the least popular product of week 1", function() {
    var result = leastPopularProduct.leastPopularProduct(1);
    assert.equal(result, "Apples - loose");
  });
});
describe("mostPopularCategory", function() {
  it("should return the most popular category of week 1", function() {
    var result = mostPopularCategory.mostPopularCategory(1);
    assert.equal(result, "Fruit");
  });
});
describe("leastPopularCategory", function() {
  it("should return the least popular category of week 1", function() {
    var result = leastPopularCategory.leastPopularCategory(1);
    assert.equal(result, "Hygiene");
  });
});
describe("mostProfitableCategory", function() {
  it("should return the most profitable category of week 1", function() {
    var result = mostProfitableCategory.mostProfitableCategory(1);
    assert.equal(result, "Dairy");
  });
});
describe("mostProfitableProduct", function() {
  it("should return the most profitable product of each week", function() {
    var result = mostProfitableProduct.mostProfitableProduct(1);
    assert.equal(result, "Imasi");
  });
});
describe("Purchases", function() {
  it("should return a map of all purchases for week 1", function() {
    var result = purchases.Purchases(1);
    assert.deepEqual(result, [{
      item: 'Chakalaka Can',
      quantity: '3',
      cost: '7,00',
      date: '23-Jan',
      product_id: 4
    }, {
      item: 'Coke 500ml',
      quantity: '3',
      cost: '3,50',
      date: '23-Jan',
      product_id: 5
    }, {
      item: 'Cream Soda 500ml',
      quantity: '4',
      cost: '4,50',
      date: '23-Jan',
      product_id: 6
    }, {
      item: 'Fanta 500ml',
      quantity: '2',
      cost: '4,50',
      date: '23-Jan',
      product_id: 7
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '2',
      cost: '5,00',
      date: '23-Jan',
      product_id: 8
    }, {
      item: 'Imasi',
      quantity: '1',
      cost: '17,00',
      date: '23-Jan',
      product_id: 2
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '3',
      cost: '20,00',
      date: '23-Jan',
      product_id: 9
    }, {
      item: 'Milk 1l',
      quantity: '4',
      cost: '7,00',
      date: '23-Jan',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '5',
      cost: '8,00',
      date: '23-Jan',
      product_id: 14
    }, {
      item: 'Bananas - loose',
      quantity: '4',
      cost: '1,00',
      date: '28-Jan',
      product_id: 1
    }, {
      item: 'Apples - loose',
      quantity: '10',
      cost: '1,50',
      date: '28-Jan',
      product_id: 17
    }, {
      item: 'Mixed Sweets 5s',
      quantity: '60',
      cost: '3,00',
      date: '28-Jan',
      product_id: 11
    }, {
      item: 'Shampoo 1 litre',
      quantity: '1',
      cost: '20,00',
      date: '28-Jan',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '3',
      cost: '3,00',
      date: '28-Jan',
      product_id: 13
    }, {
      item: 'Bread',
      quantity: '30',
      cost: '9,00',
      date: '28-Jan',
      product_id: 3
    }, {
      item: 'Chakalaka Can',
      quantity: '15',
      cost: '7,00',
      date: '28-Jan',
      product_id: 4
    }, {
      item: 'Coke 500ml',
      quantity: '36',
      cost: '3,50',
      date: '28-Jan',
      product_id: 5
    }, {
      item: 'Cream Soda 500ml',
      quantity: '24',
      cost: '4,50',
      date: '28-Jan',
      product_id: 6
    }, {
      item: 'Fanta 500ml',
      quantity: '24',
      cost: '4,50',
      date: '28-Jan',
      product_id: 7
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '15',
      cost: '5,00',
      date: '28-Jan',
      product_id: 8
    }, {
      item: 'Imasi',
      quantity: '15',
      cost: '17,00',
      date: '28-Jan',
      product_id: 2
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '15',
      cost: '20,00',
      date: '28-Jan',
      product_id: 9
    }, {
      item: 'Milk 1l',
      quantity: '25',
      cost: '7,00',
      date: '28-Jan',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '10',
      cost: '8,00',
      date: '28-Jan',
      product_id: 14
    }, {
      item: 'Shampoo 1 litre',
      quantity: '1',
      cost: '20,00',
      date: '02-Feb',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '3',
      cost: '3,00',
      date: '02-Feb',
      product_id: 13
    }, {
      item: 'Bananas - loose',
      quantity: '12',
      cost: '1,00',
      date: '03-Feb',
      product_id: 1
    }, {
      item: 'Apples - loose',
      quantity: '100',
      cost: '1,50',
      date: '03-Feb',
      product_id: 17
    }, {
      item: 'Mixed Sweets 5s',
      quantity: '240',
      cost: '3,00',
      date: '03-Feb',
      product_id: 11
    }, {
      item: 'Shampoo 1 litre',
      quantity: '2',
      cost: '20,00',
      date: '04-Feb',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '5',
      cost: '3,00',
      date: '04-Feb',
      product_id: 13
    }, {
      item: 'Bread',
      quantity: '4',
      cost: '11,00',
      date: '04-Feb',
      product_id: 3
    }, {
      item: 'Imasi',
      quantity: '4',
      cost: '24,00',
      date: '04-Feb',
      product_id: 2
    }, {
      item: 'Bananas - loose',
      quantity: '8',
      cost: '1,00',
      date: '06-Feb',
      product_id: 1
    }, {
      item: 'Apples - loose',
      quantity: '100',
      cost: '1,50',
      date: '06-Feb',
      product_id: 17
    }, {
      item: 'Mixed Sweets 5s',
      quantity: '150',
      cost: '3,00',
      date: '06-Feb',
      product_id: 11
    }, {
      item: 'Soap Bar',
      quantity: '5',
      cost: '3,00',
      date: '06-Feb',
      product_id: 13
    }, {
      item: 'Bread',
      quantity: '30',
      cost: '9,00',
      date: '6-Feb',
      product_id: 3
    }, {
      item: 'Chakalaka Can',
      quantity: '15',
      cost: '7,00',
      date: '6-Feb',
      product_id: 4
    }, {
      item: 'Coke 500ml',
      quantity: '36',
      cost: '3,50',
      date: '6-Feb',
      product_id: 5
    }, {
      item: 'Cream Soda 500ml',
      quantity: '18',
      cost: '4,50',
      date: '6-Feb',
      product_id: 6
    }, {
      item: 'Fanta 500ml',
      quantity: '24',
      cost: '4,50',
      date: '6-Feb',
      product_id: 7
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '15',
      cost: '5,00',
      date: '6-Feb',
      product_id: 8
    }, {
      item: 'Imasi',
      quantity: '25',
      cost: '17,00',
      date: '6-Feb',
      product_id: 2
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '5',
      cost: '20,00',
      date: '6-Feb',
      product_id: 9
    }, {
      item: 'Milk 1l',
      quantity: '10',
      cost: '7,00',
      date: '6-Feb',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '10',
      cost: '8,00',
      date: '6-Feb',
      product_id: 14
    }, {
      item: 'Rose (plastic)',
      quantity: '20',
      cost: '10,00',
      date: '09-Feb',
      product_id: 16
    }, {
      item: 'Milk 1l',
      quantity: '3',
      cost: '9,50',
      date: '09-Feb',
      product_id: 10
    }, {
      item: 'Bananas - loose',
      quantity: '4',
      cost: '1,00',
      date: '10-Feb',
      product_id: 1
    }, {
      item: 'Apples - loose',
      quantity: '20',
      cost: '1,50',
      date: '10-Feb',
      product_id: 17
    }, {
      item: 'Mixed Sweets 5s',
      quantity: '150',
      cost: '3,00',
      date: '10-Feb',
      product_id: 11
    }, {
      item: 'Bread',
      quantity: '10',
      cost: '9,00',
      date: '10-Feb',
      product_id: 3
    }, {
      item: 'Chakalaka Can',
      quantity: '15',
      cost: '7,00',
      date: '10-Feb',
      product_id: 4
    }, {
      item: 'Coke 500ml',
      quantity: '18',
      cost: '3,50',
      date: '10-Feb',
      product_id: 5
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '5',
      cost: '5,00',
      date: '10-Feb',
      product_id: 8
    }, {
      item: 'Heart Chocolates',
      quantity: '20',
      cost: '25,00',
      date: '10-Feb',
      product_id: 15
    }, {
      item: 'Imasi',
      quantity: '10',
      cost: '17,00',
      date: '10-Feb',
      product_id: 2
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '5',
      cost: '20,00',
      date: '10-Feb',
      product_id: 9
    }, {
      item: 'Milk 1l',
      quantity: '10',
      cost: '7,00',
      date: '10-Feb',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '15',
      cost: '8,00',
      date: '10-Feb',
      product_id: 14
    }, {
      item: 'Shampoo 1 litre',
      quantity: '2',
      cost: '20,00',
      date: '11-Feb',
      product_id: 12
    }, {
      item: 'Valentine Cards',
      quantity: '20',
      cost: '2,00',
      date: '11-Feb',
      product_id: 18
    }, {
      item: 'Milk 1l',
      quantity: '3',
      cost: '9,50',
      date: '12-Feb',
      product_id: 10
    }, {
      item: 'Bananas - loose',
      quantity: '4',
      cost: '1,00',
      date: '13-Feb',
      product_id: 1
    }, {
      item: 'Mixed Sweets 5s',
      quantity: '50',
      cost: '3,00',
      date: '13-Feb',
      product_id: 11
    }, {
      item: 'Shampoo 1 litre',
      quantity: '3',
      cost: '20,00',
      date: '13-Feb',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '5',
      cost: '3,00',
      date: '13-Feb',
      product_id: 13
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '5',
      cost: '8,50',
      date: '13-Feb',
      product_id: 8
    }, {
      item: 'Bread',
      quantity: '5',
      cost: '9,00',
      date: '13-Feb',
      product_id: 3
    }, {
      item: 'Coke 500ml',
      quantity: '12',
      cost: '3,50',
      date: '13-Feb',
      product_id: 5
    }, {
      item: 'Fanta 500ml',
      quantity: '12',
      cost: '4,50',
      date: '13-Feb',
      product_id: 7
    }, {
      item: 'Imasi',
      quantity: '20',
      cost: '17,00',
      date: '13-Feb',
      product_id: 2
    }, {
      item: 'Milk 1l',
      quantity: '15',
      cost: '7,00',
      date: '13-Feb',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '5',
      cost: '8,00',
      date: '13-Feb',
      product_id: 14
    }, {
      item: 'Shampoo 1 litre',
      quantity: '1',
      cost: '20,00',
      date: '14-Feb',
      product_id: 12
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '2',
      cost: '8,50',
      date: '14-Feb',
      product_id: 8
    }, {
      item: 'Chakalaka Can',
      quantity: '2',
      cost: '8,50',
      date: '16-Feb',
      product_id: 4
    }, {
      item: 'Cream Soda 500ml',
      quantity: '2',
      cost: '7,50',
      date: '16-Feb',
      product_id: 6
    }, {
      item: 'Fanta 500ml',
      quantity: '1',
      cost: '6,50',
      date: '16-Feb',
      product_id: 7
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '2',
      cost: '8,50',
      date: '16-Feb',
      product_id: 8
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '1',
      cost: '30,00',
      date: '16-Feb',
      product_id: 9
    }, {
      item: 'Milk 1l',
      quantity: '6',
      cost: '9,50',
      date: '16-Feb',
      product_id: 10
    }, {
      item: 'Apples - loose',
      quantity: '60',
      cost: '1,50',
      date: '17-Feb',
      product_id: 17
    }, {
      item: 'Mixed Sweets 5s',
      quantity: '12',
      cost: '3,00',
      date: '17-Feb',
      product_id: 11
    }, {
      item: 'Bread',
      quantity: '15',
      cost: '9,00',
      date: '17-Feb',
      product_id: 3
    }, {
      item: 'Chakalaka Can',
      quantity: '10',
      cost: '7,00',
      date: '17-Feb',
      product_id: 4
    }, {
      item: 'Coke 500ml',
      quantity: '24',
      cost: '3,50',
      date: '17-Feb',
      product_id: 5
    }, {
      item: 'Cream Soda 500ml',
      quantity: '12',
      cost: '4,50',
      date: '17-Feb',
      product_id: 6
    }, {
      item: 'Fanta 500ml',
      quantity: '12',
      cost: '4,50',
      date: '17-Feb',
      product_id: 7
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '10',
      cost: '5,00',
      date: '17-Feb',
      product_id: 8
    }, {
      item: 'Imasi',
      quantity: '15',
      cost: '17,00',
      date: '17-Feb',
      product_id: 2
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '5',
      cost: '20,00',
      date: '17-Feb',
      product_id: 9
    }, {
      item: 'Milk 1l',
      quantity: '15',
      cost: '7,00',
      date: '17-Feb',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '5',
      cost: '8,00',
      date: '17-Feb',
      product_id: 14
    }, {
      item: 'Shampoo 1 litre',
      quantity: '1',
      cost: '20,00',
      date: '18-Feb',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '5',
      cost: '3,00',
      date: '18-Feb',
      product_id: 13
    }, {
      item: 'Shampoo 1 litre',
      quantity: '2',
      cost: '20,00',
      date: '19-Feb',
      product_id: 12
    }, {
      item: 'Milk 1l',
      quantity: '1',
      cost: '9,50',
      date: '19-Feb',
      product_id: 10
    }, {
      item: 'Bananas - loose',
      quantity: '20',
      cost: '1,00',
      date: '20-Feb',
      product_id: 1
    }, {
      item: 'Apples - loose',
      quantity: '90',
      cost: '1,50',
      date: '20-Feb',
      product_id: 17
    }, {
      item: 'Mixed Sweets 5s',
      quantity: '20',
      cost: '3,00',
      date: '20-Feb',
      product_id: 11
    }, {
      item: 'Shampoo 1 litre',
      quantity: '2',
      cost: '20,00',
      date: '20-Feb',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '3',
      cost: '3,00',
      date: '20-Feb',
      product_id: 13
    }, {
      item: 'Bread',
      quantity: '10',
      cost: '9,00',
      date: '20-Feb',
      product_id: 3
    }, {
      item: 'Imasi',
      quantity: '10',
      cost: '17,00',
      date: '20-Feb',
      product_id: 2
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '5',
      cost: '20,00',
      date: '20-Feb',
      product_id: 9
    }, {
      item: 'Milk 1l',
      quantity: '15',
      cost: '7,00',
      date: '20-Feb',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '10',
      cost: '8,00',
      date: '20-Feb',
      product_id: 14
    }, {
      item: 'Chakalaka Can',
      quantity: '3',
      cost: '9,00',
      date: '23-Feb',
      product_id: 4
    }, {
      item: 'Bananas - loose',
      quantity: '10',
      cost: '1,00',
      date: '24-Feb',
      product_id: 1
    }, {
      item: 'Apples - loose',
      quantity: '90',
      cost: '1,50',
      date: '24-Feb',
      product_id: 17
    }, {
      item: 'Mixed Sweets 5s',
      quantity: '8',
      cost: '3,00',
      date: '24-Feb',
      product_id: 11
    }, {
      item: 'Bread',
      quantity: '15',
      cost: '9,00',
      date: '24-Feb',
      product_id: 3
    }, {
      item: 'Chakalaka Can',
      quantity: '10',
      cost: '7,00',
      date: '24-Feb',
      product_id: 4
    }, {
      item: 'Coke 500ml',
      quantity: '18',
      cost: '3,50',
      date: '24-Feb',
      product_id: 5
    }, {
      item: 'Cream Soda 500ml',
      quantity: '6',
      cost: '4,50',
      date: '24-Feb',
      product_id: 6
    }, {
      item: 'Fanta 500ml',
      quantity: '6',
      cost: '4,50',
      date: '24-Feb',
      product_id: 7
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '10',
      cost: '5,00',
      date: '24-Feb',
      product_id: 8
    }, {
      item: 'Imasi',
      quantity: '15',
      cost: '17,00',
      date: '24-Feb',
      product_id: 2
    }, {
      item: 'Milk 1l',
      quantity: '20',
      cost: '7,00',
      date: '24-Feb',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '15',
      cost: '8,00',
      date: '24-Feb',
      product_id: 14
    }, {
      item: 'Soap Bar',
      quantity: '5',
      cost: '3,00',
      date: '25-Feb',
      product_id: 13
    }, {
      item: 'Shampoo 1 litre',
      quantity: '2',
      cost: '20,00',
      date: '26-Feb',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '5',
      cost: '3,00',
      date: '26-Feb',
      product_id: 13
    }, {
      item: 'Bread',
      quantity: '1',
      cost: '11,00',
      date: '26-Feb',
      product_id: 3
    }, {
      item: 'Fanta 500ml',
      quantity: '2',
      cost: '6,50',
      date: '26-Feb',
      product_id: 7
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '1',
      cost: '8,50',
      date: '26-Feb',
      product_id: 8
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '1',
      cost: '30,00',
      date: '26-Feb',
      product_id: 9
    }, {
      item: 'Bananas - loose',
      quantity: '10',
      cost: '1,00',
      date: '27-Feb',
      product_id: 1
    }, {
      item: 'Apples - loose',
      quantity: '60',
      cost: '1,50',
      date: '27-Feb',
      product_id: 17
    }, {
      item: 'Shampoo 1 litre',
      quantity: '5',
      cost: '20,00',
      date: '27-Feb',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '5',
      cost: '3,00',
      date: '27-Feb',
      product_id: 13
    }, {
      item: 'Bread',
      quantity: '20',
      cost: '9,00',
      date: '27-Feb',
      product_id: 3
    }, {
      item: 'Chakalaka Can',
      quantity: '15',
      cost: '7,00',
      date: '27-Feb',
      product_id: 4
    }, {
      item: 'Coke 500ml',
      quantity: '24',
      cost: '3,50',
      date: '27-Feb',
      product_id: 5
    }, {
      item: 'Cream Soda 500ml',
      quantity: '12',
      cost: '4,50',
      date: '27-Feb',
      product_id: 6
    }, {
      item: 'Fanta 500ml',
      quantity: '12',
      cost: '4,50',
      date: '27-Feb',
      product_id: 7
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '15',
      cost: '5,00',
      date: '27-Feb',
      product_id: 8
    }, {
      item: 'Imasi',
      quantity: '15',
      cost: '17,00',
      date: '27-Feb',
      product_id: 2
    }, {
      item: 'Iwisa Pap 5kg',
      quantity: '10',
      cost: '20,00',
      date: '27-Feb',
      product_id: 9
    }, {
      item: 'Milk 1l',
      quantity: '20',
      cost: '7,00',
      date: '27-Feb',
      product_id: 10
    }, {
      item: 'Top Class Soy Mince',
      quantity: '15',
      cost: '8,00',
      date: '27-Feb',
      product_id: 14
    }, {
      item: 'Shampoo 1 litre',
      quantity: '2',
      cost: '20,00',
      date: '28-Feb',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '3',
      cost: '3,00',
      date: '28-Feb',
      product_id: 13
    }, {
      item: 'Chakalaka Can',
      quantity: '3',
      cost: '8,50',
      date: '28-Feb',
      product_id: 4
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '2',
      cost: '8,50',
      date: '28-Feb',
      product_id: 8
    }, {
      item: 'Top Class Soy Mince',
      quantity: '5',
      cost: '11,00',
      date: '28-Feb',
      product_id: 14
    }, {
      item: 'Shampoo 1 litre',
      quantity: '2',
      cost: '20,00',
      date: '01-Mar',
      product_id: 12
    }, {
      item: 'Soap Bar',
      quantity: '5',
      cost: '3,00',
      date: '01-Mar',
      product_id: 13
    }, {
      item: 'Chakalaka Can',
      quantity: '3',
      cost: '8,50',
      date: '01-Mar',
      product_id: 4
    }, {
      item: 'Gold Dish Vegetable Curry Can',
      quantity: '2',
      cost: '8,50',
      date: '01-Mar',
      product_id: 8
    }, {
      item: 'Top Class Soy Mince',
      quantity: '3',
      cost: '11,00',
      date: '01-Mar',
      product_id: 14
    }]);
  });
});
