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
  it("should return weekly sales for week 2", function() {
    var result = weeklySales.weeklySales(2);
    assert.deepEqual(result, [{
      stockItem: 'Imasi',
      sold: 2,
      income: 25,
      date: '8-Feb'
    }, {
      stockItem: 'Bread',
      sold: 2,
      income: 12,
      date: '8-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 1,
      income: 10,
      date: '8-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 0,
      income: 9,
      date: '8-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 4,
      income: 6.5,
      date: '8-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 4,
      income: 6.5,
      date: '8-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 1,
      income: 7.5,
      date: '8-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 1,
      income: 30,
      date: '8-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 2,
      income: 12,
      date: '8-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '8-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 1,
      income: 6,
      date: '8-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 5,
      income: 2,
      date: '8-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 2,
      income: 2,
      date: '8-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 9,
      income: 3,
      date: '8-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 3,
      income: 10,
      date: '9-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 6,
      income: 25,
      date: '9-Feb'
    }, {
      stockItem: 'Bread',
      sold: 7,
      income: 12,
      date: '9-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 5,
      income: 10,
      date: '9-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 6,
      income: 9,
      date: '9-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 3,
      income: 6.5,
      date: '9-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 8,
      income: 6.5,
      date: '9-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 5,
      income: 7.5,
      date: '9-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 2,
      income: 30,
      date: '9-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 1,
      income: 12,
      date: '9-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '9-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 0,
      income: 6,
      date: '9-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 5,
      income: 2,
      date: '9-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 0,
      income: 2,
      date: '9-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 3,
      income: 3,
      date: '9-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 5,
      income: 10,
      date: '10-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 4,
      income: 25,
      date: '10-Feb'
    }, {
      stockItem: 'Bread',
      sold: 2,
      income: 12,
      date: '10-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 0,
      income: 10,
      date: '10-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 0,
      income: 9,
      date: '10-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 1,
      income: 6.5,
      date: '10-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 3,
      income: 6.5,
      date: '10-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 2,
      income: 7.5,
      date: '10-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 1,
      income: 30,
      date: '10-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 3,
      income: 12,
      date: '10-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 1,
      income: 30,
      date: '10-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 0,
      income: 6,
      date: '10-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 3,
      income: 2,
      date: '10-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 2,
      income: 2,
      date: '10-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 7,
      income: 2,
      date: '10-Feb'
    }, {
      stockItem: 'Heart Chocolates',
      sold: 3,
      income: 35,
      date: '10-Feb'
    }, {
      stockItem: 'ose (plastic)',
      sold: 1,
      income: 15,
      date: '10-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 5,
      income: 10,
      date: '11-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 4,
      income: 25,
      date: '11-Feb'
    }, {
      stockItem: 'Bread',
      sold: 3,
      income: 12,
      date: '11-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 2,
      income: 10,
      date: '11-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 1,
      income: 9,
      date: '11-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 2,
      income: 6.5,
      date: '11-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 3,
      income: 6.5,
      date: '11-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 1,
      income: 7.5,
      date: '11-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 0,
      income: 30,
      date: '11-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 2,
      income: 12,
      date: '11-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 1,
      income: 30,
      date: '11-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 0,
      income: 6,
      date: '11-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 4,
      income: 2,
      date: '11-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 3,
      income: 2,
      date: '11-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 8,
      income: 2,
      date: '11-Feb'
    }, {
      stockItem: 'Heart Chocolates',
      sold: 5,
      income: 35,
      date: '11-Feb'
    }, {
      stockItem: 'ose (plastic)',
      sold: 3,
      income: 15,
      date: '11-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 3,
      income: 10,
      date: '12-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 9,
      income: 25,
      date: '12-Feb'
    }, {
      stockItem: 'Bread',
      sold: 2,
      income: 12,
      date: '12-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 3,
      income: 10,
      date: '12-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 1,
      income: 9,
      date: '12-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 0,
      income: 6.5,
      date: '12-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 2,
      income: 6.5,
      date: '12-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 1,
      income: 7.5,
      date: '12-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 0,
      income: 30,
      date: '12-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 2,
      income: 12,
      date: '12-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '12-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 2,
      income: 6,
      date: '12-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 2,
      income: 2,
      date: '12-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 3,
      income: 2,
      date: '12-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 3,
      income: 3,
      date: '12-Feb'
    }, {
      stockItem: 'Heart Chocolates',
      sold: 2,
      income: 35,
      date: '12-Feb'
    }, {
      stockItem: 'Valentine Cards',
      sold: 6,
      income: 4,
      date: '12-Feb'
    }, {
      stockItem: 'ose (plastic)',
      sold: 2,
      income: 15,
      date: '12-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 6,
      income: 10,
      date: '13-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 6,
      income: 25,
      date: '13-Feb'
    }, {
      stockItem: 'Bread',
      sold: 5,
      income: 12,
      date: '13-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 7,
      income: 10,
      date: '13-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 15,
      income: 9,
      date: '13-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 6,
      income: 6.5,
      date: '13-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 8,
      income: 6.5,
      date: '13-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 4,
      income: 7.5,
      date: '13-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 3,
      income: 30,
      date: '13-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 4,
      income: 12,
      date: '13-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 4,
      income: 30,
      date: '13-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 2,
      income: 6,
      date: '13-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 4,
      income: 2,
      date: '13-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 2,
      income: 2,
      date: '13-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 6,
      income: 3,
      date: '13-Feb'
    }, {
      stockItem: 'Heart Chocolates',
      sold: 10,
      income: 35,
      date: '13-Feb'
    }, {
      stockItem: 'Valentine Cards',
      sold: 5,
      income: 4,
      date: '13-Feb'
    }, {
      stockItem: 'ose (plastic)',
      sold: 7,
      income: 15,
      date: '13-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 6,
      income: 10,
      date: '14-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 5,
      income: 25,
      date: '14-Feb'
    }, {
      stockItem: 'Bread',
      sold: 7,
      income: 12,
      date: '14-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 3,
      income: 10,
      date: '14-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 4,
      income: 9,
      date: '14-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 7,
      income: 6.5,
      date: '14-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 14,
      income: 6.5,
      date: '14-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 8,
      income: 7.5,
      date: '14-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 3,
      income: 30,
      date: '14-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 7,
      income: 12,
      date: '14-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '14-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 0,
      income: 6,
      date: '14-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 5,
      income: 2,
      date: '14-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 9,
      income: 2,
      date: '14-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 18,
      income: 3,
      date: '14-Feb'
    }, {
      stockItem: 'Heart Chocolates',
      sold: 0,
      income: 35,
      date: '14-Feb'
    }, {
      stockItem: 'Valentine Cards',
      sold: 3,
      income: 4,
      date: '14-Feb'
    }, {
      stockItem: 'ose (plastic)',
      sold: 1,
      income: 15,
      date: '14-Feb'
    }]);
  });
  it("should return weekly sales for week 3", function() {
    var result = weeklySales.weeklySales(3);
    assert.deepEqual(result, [{
      stockItem: 'Imasi',
      sold: 2,
      income: 25,
      date: '15-Feb'
    }, {
      stockItem: 'Bread',
      sold: 1,
      income: 12,
      date: '15-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 3,
      income: 10,
      date: '15-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 0,
      income: 9,
      date: '15-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 5,
      income: 6.5,
      date: '15-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 4,
      income: 6.5,
      date: '15-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 2,
      income: 7.5,
      date: '15-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 0,
      income: 30,
      date: '15-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 1,
      income: 12,
      date: '15-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '15-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 1,
      income: 6,
      date: '15-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 1,
      income: 2,
      date: '15-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 1,
      income: 2,
      date: '15-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 3,
      income: 3,
      date: '15-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 7,
      income: 10,
      date: '16-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 6,
      income: 25,
      date: '16-Feb'
    }, {
      stockItem: 'Bread',
      sold: 4,
      income: 12,
      date: '16-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 3,
      income: 10,
      date: '16-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 2,
      income: 9,
      date: '16-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 2,
      income: 6.5,
      date: '16-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 1,
      income: 6.5,
      date: '16-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 2,
      income: 7.5,
      date: '16-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 2,
      income: 30,
      date: '16-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 1,
      income: 12,
      date: '16-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '16-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 2,
      income: 6,
      date: '16-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 2,
      income: 2,
      date: '16-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 3,
      income: 2,
      date: '16-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 5,
      income: 3,
      date: '16-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 8,
      income: 10,
      date: '17-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 6,
      income: 25,
      date: '17-Feb'
    }, {
      stockItem: 'Bread',
      sold: 3,
      income: 12,
      date: '17-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 0,
      income: 10,
      date: '17-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 0,
      income: 9,
      date: '17-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 0,
      income: 6.5,
      date: '17-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 2,
      income: 6.5,
      date: '17-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 0,
      income: 7.5,
      date: '17-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 1,
      income: 30,
      date: '17-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 2,
      income: 12,
      date: '17-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '17-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 1,
      income: 6,
      date: '17-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 2,
      income: 2,
      date: '17-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 6,
      income: 2,
      date: '17-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 5,
      income: 2,
      date: '17-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 3,
      income: 10,
      date: '18-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 5,
      income: 25,
      date: '18-Feb'
    }, {
      stockItem: 'Bread',
      sold: 5,
      income: 12,
      date: '18-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 1,
      income: 10,
      date: '18-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 0,
      income: 9,
      date: '18-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 0,
      income: 6.5,
      date: '18-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 3,
      income: 6.5,
      date: '18-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 2,
      income: 7.5,
      date: '18-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 1,
      income: 30,
      date: '18-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 1,
      income: 12,
      date: '18-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 1,
      income: 30,
      date: '18-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 1,
      income: 6,
      date: '18-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 1,
      income: 2,
      date: '18-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 3,
      income: 2,
      date: '18-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 2,
      income: 2,
      date: '18-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 5,
      income: 10,
      date: '19-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 3,
      income: 25,
      date: '19-Feb'
    }, {
      stockItem: 'Bread',
      sold: 5,
      income: 12,
      date: '19-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 2,
      income: 10,
      date: '19-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 1,
      income: 9,
      date: '19-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 1,
      income: 6.5,
      date: '19-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 1,
      income: 6.5,
      date: '19-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 0,
      income: 7.5,
      date: '19-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 0,
      income: 30,
      date: '19-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 2,
      income: 12,
      date: '19-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 2,
      income: 30,
      date: '19-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 0,
      income: 6,
      date: '19-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 3,
      income: 2,
      date: '19-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 5,
      income: 2,
      date: '19-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 4,
      income: 3,
      date: '19-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 4,
      income: 10,
      date: '20-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 2,
      income: 25,
      date: '20-Feb'
    }, {
      stockItem: 'Bread',
      sold: 3,
      income: 12,
      date: '20-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 5,
      income: 10,
      date: '20-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 3,
      income: 9,
      date: '20-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 3,
      income: 6.5,
      date: '20-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 5,
      income: 6.5,
      date: '20-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 6,
      income: 7.5,
      date: '20-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 0,
      income: 30,
      date: '20-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 3,
      income: 12,
      date: '20-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 1,
      income: 30,
      date: '20-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 3,
      income: 6,
      date: '20-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 6,
      income: 2,
      date: '20-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 4,
      income: 2,
      date: '20-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 8,
      income: 3,
      date: '20-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 1,
      income: 10,
      date: '21-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 1,
      income: 25,
      date: '21-Feb'
    }, {
      stockItem: 'Bread',
      sold: 3,
      income: 12,
      date: '21-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 3,
      income: 10,
      date: '21-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 2,
      income: 9,
      date: '21-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 3,
      income: 6.5,
      date: '21-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 2,
      income: 6.5,
      date: '21-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 0,
      income: 7.5,
      date: '21-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 0,
      income: 30,
      date: '21-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 2,
      income: 12,
      date: '21-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '21-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 0,
      income: 6,
      date: '21-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 2,
      income: 2,
      date: '21-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 3,
      income: 2,
      date: '21-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 2,
      income: 3,
      date: '21-Feb'
    }]);
  });
  it("should return weekly sales for week 4", function() {
    var result = weeklySales.weeklySales(4);
    assert.deepEqual(result, [{
      stockItem: 'Imasi',
      sold: 2,
      income: 25,
      date: '22-Feb'
    }, {
      stockItem: 'Bread',
      sold: 3,
      income: 12,
      date: '22-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 0,
      income: 10,
      date: '22-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 1,
      income: 9,
      date: '22-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 2,
      income: 6.5,
      date: '22-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 0,
      income: 6.5,
      date: '22-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 0,
      income: 7.5,
      date: '22-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 0,
      income: 30,
      date: '22-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 0,
      income: 12,
      date: '22-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '22-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 1,
      income: 6,
      date: '22-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 0,
      income: 2,
      date: '22-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 1,
      income: 2,
      date: '22-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 3,
      income: 3,
      date: '22-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 8,
      income: 10,
      date: '23-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 6,
      income: 25,
      date: '23-Feb'
    }, {
      stockItem: 'Bread',
      sold: 2,
      income: 12,
      date: '23-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 2,
      income: 10,
      date: '23-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 1,
      income: 9,
      date: '23-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 1,
      income: 6.5,
      date: '23-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 3,
      income: 6.5,
      date: '23-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 0,
      income: 7.5,
      date: '23-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 2,
      income: 30,
      date: '23-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 1,
      income: 12,
      date: '23-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '23-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 0,
      income: 6,
      date: '23-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 2,
      income: 2,
      date: '23-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 1,
      income: 2,
      date: '23-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 3,
      income: 3,
      date: '23-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 4,
      income: 10,
      date: '24-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 2,
      income: 25,
      date: '24-Feb'
    }, {
      stockItem: 'Bread',
      sold: 6,
      income: 12,
      date: '24-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 1,
      income: 10,
      date: '24-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 2,
      income: 9,
      date: '24-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 1,
      income: 6.5,
      date: '24-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 2,
      income: 6.5,
      date: '24-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 1,
      income: 7.5,
      date: '24-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 1,
      income: 30,
      date: '24-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 2,
      income: 12,
      date: '24-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '24-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 1,
      income: 6,
      date: '24-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 5,
      income: 2,
      date: '24-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 3,
      income: 2,
      date: '24-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 7,
      income: 2,
      date: '24-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 8,
      income: 10,
      date: '25-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 6,
      income: 25,
      date: '25-Feb'
    }, {
      stockItem: 'Bread',
      sold: 7,
      income: 12,
      date: '25-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 5,
      income: 10,
      date: '25-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 4,
      income: 9,
      date: '25-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 6,
      income: 6.5,
      date: '25-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 8,
      income: 6.5,
      date: '25-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 5,
      income: 7.5,
      date: '25-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 3,
      income: 30,
      date: '25-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 7,
      income: 12,
      date: '25-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 1,
      income: 30,
      date: '25-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 4,
      income: 6,
      date: '25-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 2,
      income: 2,
      date: '25-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 8,
      income: 2,
      date: '25-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 5,
      income: 2,
      date: '25-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 8,
      income: 10,
      date: '26-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 8,
      income: 25,
      date: '26-Feb'
    }, {
      stockItem: 'Bread',
      sold: 5,
      income: 12,
      date: '26-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 3,
      income: 10,
      date: '26-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 7,
      income: 9,
      date: '26-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 3,
      income: 6.5,
      date: '26-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 7,
      income: 6.5,
      date: '26-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 4,
      income: 7.5,
      date: '26-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 3,
      income: 30,
      date: '26-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 8,
      income: 12,
      date: '26-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 0,
      income: 30,
      date: '26-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 3,
      income: 6,
      date: '26-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 2,
      income: 2,
      date: '26-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 3,
      income: 2,
      date: '26-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 1,
      income: 3,
      date: '26-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 8,
      income: 10,
      date: '27-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 5,
      income: 25,
      date: '27-Feb'
    }, {
      stockItem: 'Bread',
      sold: 3,
      income: 12,
      date: '27-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 12,
      income: 10,
      date: '27-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 9,
      income: 9,
      date: '27-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 6,
      income: 6.5,
      date: '27-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 18,
      income: 6.5,
      date: '27-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 3,
      income: 7.5,
      date: '27-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 4,
      income: 30,
      date: '27-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 12,
      income: 12,
      date: '27-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 5,
      income: 30,
      date: '27-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 3,
      income: 6,
      date: '27-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 1,
      income: 2,
      date: '27-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 3,
      income: 2,
      date: '27-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 1,
      income: 3,
      date: '27-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 3,
      income: 10,
      date: '28-Feb'
    }, {
      stockItem: 'Imasi',
      sold: 2,
      income: 25,
      date: '28-Feb'
    }, {
      stockItem: 'Bread',
      sold: 4,
      income: 12,
      date: '28-Feb'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 5,
      income: 10,
      date: '28-Feb'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 6,
      income: 9,
      date: '28-Feb'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 3,
      income: 6.5,
      date: '28-Feb'
    }, {
      stockItem: 'Coke 500ml',
      sold: 4,
      income: 6.5,
      date: '28-Feb'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 6,
      income: 7.5,
      date: '28-Feb'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 2,
      income: 30,
      date: '28-Feb'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 9,
      income: 12,
      date: '28-Feb'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 4,
      income: 30,
      date: '28-Feb'
    }, {
      stockItem: 'Soap Bar',
      sold: 7,
      income: 6,
      date: '28-Feb'
    }, {
      stockItem: 'Bananas - loose',
      sold: 6,
      income: 2,
      date: '28-Feb'
    }, {
      stockItem: 'Apples - loose',
      sold: 8,
      income: 2,
      date: '28-Feb'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 8,
      income: 3,
      date: '28-Feb'
    }, {
      stockItem: 'Milk 1l',
      sold: 4,
      income: 10,
      date: '1-Mar'
    }, {
      stockItem: 'Imasi',
      sold: 3,
      income: 25,
      date: '1-Mar'
    }, {
      stockItem: 'Bread',
      sold: 3,
      income: 12,
      date: '1-Mar'
    }, {
      stockItem: 'Chakalaka Can',
      sold: 5,
      income: 10,
      date: '1-Mar'
    }, {
      stockItem: 'Gold Dish Vegetable Curry Can',
      sold: 4,
      income: 9,
      date: '1-Mar'
    }, {
      stockItem: 'Fanta 500ml',
      sold: 2,
      income: 6.5,
      date: '1-Mar'
    }, {
      stockItem: 'Coke 500ml',
      sold: 3,
      income: 6.5,
      date: '1-Mar'
    }, {
      stockItem: 'Cream Soda 500ml',
      sold: 0,
      income: 7.5,
      date: '1-Mar'
    }, {
      stockItem: 'Iwisa Pap 5kg',
      sold: 1,
      income: 30,
      date: '1-Mar'
    }, {
      stockItem: 'Top Class Soy Mince',
      sold: 4,
      income: 12,
      date: '1-Mar'
    }, {
      stockItem: 'Shampoo 1 litre',
      sold: 3,
      income: 30,
      date: '1-Mar'
    }, {
      stockItem: 'Soap Bar',
      sold: 6,
      income: 6,
      date: '1-Mar'
    }, {
      stockItem: 'Bananas - loose',
      sold: 4,
      income: 2,
      date: '1-Mar'
    }, {
      stockItem: 'Apples - loose',
      sold: 5,
      income: 2,
      date: '1-Mar'
    }, {
      stockItem: 'Mixed Sweets 5s',
      sold: 12,
      income: 3,
      date: '1-Mar'
    }]);
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
    var result = purchases.Purchases();
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

var ProductsDataService = require('../data-services/products-data-service');
var CategoriesDataService = require('../data-services/categories-data-service');
var SalesDataService = require('../data-services/sales-data-service');
var PurchasesDataService = require('../data-services/purchases-data-service');
var UserDataService = require('../data-services/user-data-service');


describe('ProductsDataService', function() {
  // var dbOptions = {
  //   host: '127.0.0.1',
  //   user: 'root',
  //   password: '5550121a',
  //   port: 3306,
  //   database: "TestDB"
  // };
  // var connection = mysql.createConnection(dbOptions);


  it('showProduct should show all products', function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var productsDataService = new ProductsDataService(connection);
    productsDataService.showProduct(function(err, result) {
      if (err) throw err;
      assert.equal(result.length, 18);
    });
    done();
  });

  it("searchProduct should return all products that matches searchValue", function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var productsDataService = new ProductsDataService(connection);
    var searchVal = "%Coke%";
    productsDataService.searchProduct(searchVal, function(err, result) {
      if (err) throw err;
      assert.equal(result.product, "Coke 500ml");
    });
    done();
  });


  it('addProduct add a product', function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var data = [19, "Milk 2ls", 6, 9];
    var productsDataService = new ProductsDataService(connection);
    productsDataService.addProduct([data], function(err, rows) {
      if (err) throw err;
      var test = rows.affectedRows;
      assert.equal(test, 1);
    });
    done();
  });

  it('getProduct should return a specific product', function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var productsDataService = new ProductsDataService(connection);
    productsDataService.getProduct(19, function(err, product) {
      console.log(product);
      assert.equal('Milk 1l', product.product);
    });
    done();
  });
  it('should add, update and delete a product from DB', function(done) {
      var addData = [19, "Milk 2ls", 6, 9];
    var productsDataService = new ProductsDataService(connection);
    productsDataService.addProduct([data], function(err, rows) {
      if (err) throw err;
      var test = rows.affectedRows;
      assert.equal(test, 1);
    });
    done();
  });
  it('updateProduct should update a products data', function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var data = {
      category_id: 6,
      product: "Milk 2L",
      price: 10
    };
    var productsDataService = new ProductsDataService(connection);
    productsDataService.updateProduct(data, 19, function(err, rows) {
      if (err) throw err;
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });


  it('deleteProduct should remove a product', function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var productsDataService = new ProductsDataService(connection);
    productsDataService.deleteProduct(19, function(err, rows) {
      if (err) throw err;
      // console.log();
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });




});

describe('CategoriesDataService', function() {
  var dbOptions = {
    host: '127.0.0.1',
    user: 'root',
    password: '5550121a',
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);
  it("showCategory should return all categories", function(done) {
    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.showCategory(function(err, category) {
      assert.equal(category.length, 5);
    });
    done();
  });
  it("searchCategory should return all categories similar to the searchValue", function(done) {
    var categoryDataService = new CategoriesDataService(connection);
    var searchVal = "%Canned%";
    categoryDataService.searchCategory(searchVal, function(err, category) {
      assert.equal(category.category, "Canned Goods");
    });
    done();
  });

  it('getCategory should return a specific category', function(done) {
    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.getCategory(3, function(err, category) {
      assert.equal('Canned Goods', category.category);
    });
    done();
  });
  it('addCategory should add an category', function(done) {

    var data = [10, "Test"];

    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.addCategory([data], function(err, rows) {
      if (err) throw err;
      var test = rows.affectedRows;
      assert.equal(test, 1);
    });
    done();
  });


  it('updateCategory should update a products data', function(done) {
    var data = {
      category: "test"
    };

    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.updateCategory(10, data, function(err, rows) {
      if (err) throw err;
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });

  it('deleteCategory should remove a product', function(done) {
    var categoryDataService = new CategoriesDataService(connection);
    categoryDataService.deleteCategory(10, function(err, rows) {
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });
});

describe('SalesDataService', function() {
  var dbOptions = {
    host: '127.0.0.1',
    user: 'root',
    password: '5550121a',
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);
  it("showSale should return all sales", function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var salesDataService = new SalesDataService(connection);
    salesDataService.showSale(function(err, sale) {
      assert.equal(sale.length, 447);
    });
    done();
  });
  it("searchSale should return all Sales similar to the searchValue", function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var searchVal = "%bread%";
    var salesDataService = new SalesDataService(connection);
    salesDataService.searchSale(searchVal, function(err, sale) {
      assert.equal(sale.length, 58);
    });
    done();
  });
  it('getSale should return a specific sale', function(done) {
    var salesDataService = new SalesDataService(connection);
    salesDataService.getSale(3, function(err, sale) {
      assert.equal(4, sale.product_id);
    });
    done();
  });
  it('addSale should add a sale', function(done) {

    var data = [448, 2001 - 03 - 01, 11, 12, 3];

    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var salesDataService = new SalesDataService(connection);
    salesDataService.addSale([data], function(err, rows) {
      if (err) throw err;
      var test = rows.affectedRows;
      assert.equal(test, 1);
    });
    done();
  });


  it('updateSale should update a sales data', function(done) {
    var data = {
      date: 2001 - 03 - 01,
      product_id: 4,
      sold: 12,
      price: 4
    };

    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var salesDataService = new SalesDataService(connection);
    salesDataService.updateSale(448, data, function(err, rows) {
      if (err) throw err;
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });

  it('deleteSale should remove a sale', function(done) {
    var salesDataService = new SalesDataService(connection);
    salesDataService.deleteSale(448, function(err, rows) {
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });

});
describe('PurchasesDataService', function() {
  var dbOptions = {
    host: '127.0.0.1',
    user: 'root',
    password: '5550121a',
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);
  it("showPurchase should return all purchases", function(done) {
    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.showPurchase(function(err, purchase) {
      assert.equal(purchase.length, 153);
    });
    done();
  });
  it("searchPurchase should return all purchases similar to searchVal", function(done) {
    var purchasesDataService = new PurchasesDataService(connection);
    var searchVal = "%bread%";
    purchasesDataService.searchPurchase(searchVal, function(err, purchase) {
      assert.equal(purchase.length, 18);
    });
    done();
  });


  it('getPurchase should return a specific Purchase', function(done) {
    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.getPurchase(1, function(err, purchase) {
      assert.equal(4, purchase.product_id);
    });
    done();
  });
  it('addPurchase should add a Purchase', function(done) {

    var data = [154, 2001 - 03 - 01, 11, 12, 3];

    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.addPurchase([data], function(err, rows) {
      if (err) throw err;
      var test = rows.affectedRows;
      assert.equal(test, 1);
    });
    done();
  });


  it('updatePurchase should update a Purchases data', function(done) {
    var data = {
      date: 2001 - 03 - 01,
      quantity: 12,
      cost: 4,
      product_id: 4
    };

    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.updatePurchase(154, data, function(err, rows) {
      if (err) throw err;
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });

  it('deletePurchase should remove a Purchase', function(done) {
    var purchasesDataService = new PurchasesDataService(connection);
    purchasesDataService.deletePurchase(154, function(err, rows) {
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });
});

describe('UserDataService', function() {
  var dbOptions = {
    host: '127.0.0.1',
    user: 'root',
    password: '5550121a',
    port: 3306,
    database: "travis_db"
  };
  var connection = mysql.createConnection(dbOptions);
it("showUser should return all users", function(done){
  var userDataService = new UserDataService(connection);
  userDataService.showUser(function(err, result) {
    if (err) throw err;
    assert.equal(result.length, 2);
  });
  done();
});
it("searchUser should return all users that match searchVal", function(done){
  var userDataService = new UserDataService(connection);
  var searchVal = "%test%";
  userDataService.searchUser(searchVal, function(err, result) {
    if (err) throw err;
    assert.equal(result.length, 1);
  });
  done();
});

  it('addUser add a User', function(done) {

    var data = [2, "test", "test", "test", 1, 0];

    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var userDataService = new UserDataService(connection);
    userDataService.addUser([data], function(err, rows) {
      if (err) throw err;
      var test = rows.affectedRows;
      assert.equal(test, 1);
    });
    done();
  });

  it('getUser should return a specific User', function(done) {
    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);

    var userDataService = new UserDataService(connection);
    userDataService.getUser(1, function(err, user) {
      assert.equal('test', user.username);
    });
    done();
  });

  it('updateUser should update a Users data', function(done) {
    var data = {
      username: 6,
      Email: "Milk 2L",
      password: 10,
      admin: 1,
      locked: 0
    };

    var dbOptions = {
      host: '127.0.0.1',
      user: 'root',
      password: '5550121a',
      port: 3306,
      database: "travis_db"
    };
    var connection = mysql.createConnection(dbOptions);
    var userDataService = new UserDataService(connection);
    userDataService.updateUser(2, data, function(err, rows) {
      if (err) throw err;
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });

  it('deleteUser should remove a User', function(done) {
    var userDataService = new UserDataService(connection);
    userDataService.deleteUser(2, function(err, rows) {
      var test = rows.changedRows;
      assert.equal(test, 1);
    });
    done();
  });








});
