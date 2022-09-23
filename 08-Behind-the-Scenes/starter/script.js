'use strict';
/*
// 93. Scoping in Practice
// Coded on 17.09.2022

// calcAge is defined as a function-scope, top level code
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  // inner function-scope
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    // const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    //  inner  block-scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Iman';

      // what happens if we reassign the value of the variable output which is located at the outer scope's printAge function?
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //   what will happen if we log outside of the block-scope for const or let variables? We get a referenceError
    //   console.log(str);

    //   what will happen if we log outside of the block-scope for var variables? JavaScript can lookup the variable (ignored the block-scope)
    //   This is because var is considered as a function-scope
    console.log(millennial);

    //   what will happen if we call up the function add outside of the block-scope? We get a referenceError
    // console.log(add(2, 3));

    //   the value of the reassigned variable will be displayed
    console.log(output);
  }
  printAge();

  return age;
}

// global variable, global scope
const firstName = 'Ahmad Khairi';
calcAge(1985);

// below will output referenceError because the variable age cannot be looked up/accessed
// console.log(age);
// printAge();


// 95. Hoisting and TDZ-Temporal Dead Zone in Practice
// Coded on 18.09.2022

// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ahmad Khairi';
let job = 'Engineer';
const year = 1985;

// Hoisting with function variables and declarations

// Below works fine
console.log(addFunctionDeclaration(2, 3));

function addFunctionDeclaration(a, b) {
  return a + b;
}

// Below will get ReferenceError cannot access before initialization because it is treated like a normal let/const variable
// Below is currently in the TDZ thus we get the error
// console.log(addFunctionExpression(2, 3));
// console.log(addArrowFunction(2, 3));

// const addFunctionExpression = function (a, b) {
//   return a + b;
// };

// // arrow function
// const addArrowFunction = (a, b) => a + b;

// changing to var will result in a different error where var will become undefined
// undefined(2,3) will not do anything because undefined is not a function

// console.log(addFunctionExpression(2, 3));
// console.log(addArrowFunction(2, 3));

var addFunctionExpression = function (a, b) {
  return a + b;
};

// arrow function
var addArrowFunction = (a, b) => a + b;

// Pit-fall Example (something that we don't do!)

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// summary: Don't ever use var to declare variables, use const most of the time and let if need to change the variable later
// to write clean code, declare variables at the top of each scope and code looks clean
// always declare all functions first and use them only after the declaration (applies to all types of functions)

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(x === window.y); // false
console.log(x === window.z); // false

// variables declared with var will create a property on the global "window" object which can have some implications in some cases

// this keyword
// "this" keyword/variable: special variable that is created for every execution context (every function).
// Takes the value of (points to) the "owner" of the function in which the "this" keyword is used.
// this is NOT static. It depends on how the function is called and its value is only assigned when the function is actually called.

// Method example:
const khairi = {
  name: 'Khairi',
  year: 1985,
  calcAge: function () {
    return 2022 - this.year; // this points to "khairi" object
  },
};
khairi.calcAge();

// in normal functions, this = undefined (valid in strict mode)

// in arrow functions do not get their own this keyword. It wil simply be the this keyword of the surrounding function/parent function (lexical this keyword)

// in event listener, this keyword will point to the DOM element that the handler function is attached to

// 97. The "this" keyword in practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // this keyword will point to undefined
};
calcAge(1985);

// convert to Arrow function
const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); // this keyword will point to window (global-scope)
};
calcAgeArrow(1985);

// use this keyword inside of a method
const Khairi = {
  //Khairi is the "owner" of the object
  year: 1985,
  calcAge: function () {
    console.log(this); // this keyword will point to the object Khairi that is calling the method
    console.log(2022 - this.year);
  },
};
Khairi.calcAge(); // the object Khairi is the owner of method

const iman = {
  year: 2017,
};

iman.calcAge = Khairi.calcAge; // this is called method borrowing
iman.calcAge();

const f = Khairi.calcAge; // take the function and copy into 'f'
// wsf(); //output: undefined -> because it is not attached to any object, just a regular function call

// 98. Regular functions vs Arrow functions
// Coded on 23.09.2022

const khairi = {
  firstName: 'Ahmad Khairi',
  year: '1985',
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
  // arrow function is replaced with a regular function:
  // greet: function () {
  //   console.log(`Hey ${this.firstName}`);
  },
};

khairi.greet();
console.log(this.firstName);

// In the example above, the output is "Hey undefined"
// Arrow function in this case does not get their own 'this' keyword
// Arrow function this keyword belongs to the 'window object' thus undefined
// Never use Arrow function as a method. Instead use regular function like below:
// greet: function () {
//   console.log(`Hey ${this.firstName}`);
// }
*/
// Next pit-fall example is a function inside of a method
const khairi = {
  firstName: 'Ahmad Khairi',
  year: '1985',
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    // Solution 2: Use arrow function
    const isMilennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    // Solution 1: Add a variable outside
    // const self = this;
    // // example of a function inside a method:
    // const isMilennial = function () {
    //   console.log(self); // self or that
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    isMilennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

khairi.greet();
khairi.calcAge();

// 'this' keyword in a regular function call (like the isMilennial() above) has the 'this' keyword set to undefined
// This is why we get undefined
// There are a few solutions to this problem.
// First solution, declare a variable outside of the function to point to the 'this' keyword in the parent scope
// const self = this;
// const isMilennial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// }
// The other solution is to use Arrow function
// const isMilennial = () => {
//   console.log(this);
//   console.log(this.year >= 1981 && this.year <= 1996);
// };

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);
addExpr(2, 3, 4, 5);

// arguments keyword only exist in regular functions or function expression but not in arrow function like below
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3);
