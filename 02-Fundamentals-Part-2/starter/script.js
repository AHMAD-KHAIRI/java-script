/*
// 20 Feb 2022
// Section 3: Java Script Fundamentals - Part 2

// 32. activate strict mode to make code more secure
'use strict';

// strict mode creates visible errors in the dev console where in other case JS failed silently
let hasDriversLicense = false;
const passTest = true;

// let's introduce a bug which is a typo on the variable name (missing an 's')
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
// when not in strict mode, the browser did not inform about the error
// but in strict mode, the browser indicates that the variable is not defined


// strict mode also reserves strict words for future feature such as below
const interface = 'Audio';
const private = '1234';


// 32. JavaScript functions

// a function is a piece of code that we can reuse in the code as many times we want
// function <function-name>(<function-parameter>) {<statements>}
// let's do a first example
function logger() {
    console.log('My name is AK!');
}

// calling / running / invoking function
logger();
logger();
logger();

// second example
// parameters are variables that are specific to the function
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and
    ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// functions allows us to write more maintable code because we can create reusable chuck of code
// keep your code DRY = Don't Repeat Yourself for a cleaner code

const num = Number('23'); // a Number is also a function that converts a string to a number
console.log(typeof (num));


// code challenge from codewars: remove vowels from a string
const myString = "I am Ahmad Khairi";
console.log(myString);

function disemvowel(str) {
    str = str.replace(/[aeiou]/ig, '')
    return str;
}

const removeVowelsFromMyString = disemvowel("I am Ahmad Khairi");
console.log(removeVowelsFromMyString);
// expected "m hmd Khr"


// 24 Feb 2022 11:26 PM
// 33. Function Declarations vs Expressions

// Create a function to calculate the age based on the given birth year

// Create a function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1985);
console.log(age1);

// Create a function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
// a function expression stores a function in a variable

const age2 = calcAge2(1985);
console.log(age2);
*/

// 34. Arrow Function '=>'
// In ES6, Arrow functions '=>' is added as the third type of functions added to Javascript
// Arrow functions is a special form of function expression that is shorter therefore faster to write

const calcAge3 = birthYear => 2022 - birthYear;
// In Arrow function =>, we don't need to include {} to define a code block in case of a function with a single parameter like the example above
// and return happens implicitly without explicitly writing down the return keyword in the function

// call up the arrow function just like a normal function
const age3 = calcAge3(1985);
console.log(age3);

// how to write a function with multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} will retire in ${retirementAge} years`;
}

// console.log(yearsUntilRetirement(1985));
console.log(yearsUntilRetirement(1985, "Ahmad Khairi"));
console.log(yearsUntilRetirement(2017, "Iman Ezra Khayr"));

