'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  // we can do destructuring right away like this
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },
};

// 104. Destructuring Objects
// Coded on 04.10.2022

restaurant.orderDelivery({
  time: '22:30',
  address: 'Elaeis',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Elaeis',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructuting objects are very useful especially dealing with the result from an api call like weather data which comes in the form of object

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// dealing with third party objects can be useful to have default values for a case that we are trying to read a property that does not exist on the object
// usually we get an undefined like below for menu object
// const { menu, starterMenu: starters = [] } = restaurant;
// when we assign default value to menu e.g. an empty array [], we will not get undefined
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// below we get syntax error because JS expects a code block after the curly brace
// { a, b } = obj;
// the trick is to wrap them in parentheses as destructuring assignment
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);
console.log(o, c);

// 103. Desctructuring Arrays
// Coded on 29.09.2022

const arr = [2, 3, 4];
//without using desctructuring:
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// with destructuring:
const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// 2nd element in restaurant categories is skipped by "leaving a hole/ empty space": ", ,"
const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switch the main and secondary category
// without using desctructuring:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // output:Vegetarian Italian

// with destructuring:
[main, secondary] = [secondary, main];
console.log(main, secondary); // output:Vegetarian Italian

// using the order function to receive 2 return values and destructuring assignment:
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // output:Garlic Bread Pizza

// what happens if we have a nested array
const nested = [2, 4, [5, 6]];
// using destructuring:
// const [i, , j] = nested;
// console.log(i, j);
// using destructuring inside a destructuring (getting a value inside an array inside an array)
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Using default values in destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// 107. Short circuiting (&& and ||)
// Logical operators can use ANY data type, return ANY data type, short-circuiting/short-circuit evaluation
// Short-circuting with OR logical operator means if the first value is a truthy value, it will immediately return the first value
// Example below:
console.log('---- OR ----');
console.log(3 || 'khairi'); // outputs 3 because it is a truthy value
// Other examples:
console.log('' || 'khairi'); // outputs khairi because '' is a falsy value
console.log(true || 0); // outputs true because it is a truthy value and 0 is a falsy value
console.log(undefined || null); // outputs null because undefined is a falsy value
console.log(
  undefined || // falsy
    0 || // falsy
    '' || // falsy
    'hello' || // first truthy value --> output
    23 || // ignored
    null // ignored
);
console.log(
  undefined || // falsy
    0 || // falsy
    '' || // falsy
    23 || // first truthy value --> output
    'hello' || // ignored
    null // ignored
);

// Practical application of short-circuiting
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// Easier to use short circuiting than ternary operator like above to setting default values
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('---- AND ----');
// Short-circuting with AND logical operator means if the first value is a falsy value, it will immediately return the first value
console.log(0 && 'khairi');
console.log(7 && 'khairi');

console.log(
  undefined && // first falsy value --> output
    0 && // ignore
    '' && // ignored
    23 && // ignored
    'hello' && // ignored
    null // ignored
);

console.log(
  23 && // truthy, move to next
    'khairi' && // truthy, move to next
    null && // first falsy value --> output
    'hello' // ignored
);

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// short-circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
