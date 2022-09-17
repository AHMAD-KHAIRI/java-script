'use strict';

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
