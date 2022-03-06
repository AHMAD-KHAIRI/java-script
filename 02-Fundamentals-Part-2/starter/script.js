'use strict';
/*
// 20 Feb 2022
// Section 3: Java Script Fundamentals - Part 2

// 32. activate strict mode to make code more secure


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


// 26 Feb 2022
// Learning Arrow Functions from YouTuber Colt Steele
// Definition: syntactically compact alternative to a regular function expression"
// Examples:
// const square = (x) => {
//     return x * x;
// }

// const sum = (x, y) => {
//     return x + y;
// }

// const divide = (x, y) => {
//     return x / y;
// }

// const annoying = () => {
//     console.log("LOL OMG HEYY!");
// }

// single expression code can be written like this:
const square = x => (x * x);
const sum = (x, y) => (x + y);
const divide = (x, y) => (x / y);
*/

// 6 March 2022 11.31 AM
// 36. Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     // console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and
//     ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// Recap of basic javascript functions
// How to declare a function:
// function <functionName>(<parameters separated by commas>) { <function body/return expression }
function say(message) { // where functionName: say, parameter: message
    console.log(message); // where function body: console.log(message)
}
function add(a, b) { // where functionName: add, parameters: a & b
    return a + b; // function body/expression: a + b, added 'return' to explicityly return result of a + b
}
function square(a) { // where functionName: square, parameter: a
    return a * a; // function body/expression: a * a, added 'return' to explicitly return value for the function square
}

// How to call a function:
// <functionName>(<arguments>);
say('Hello AK'); // where functionName: say, arguments that corresponds to the function parameter message --> string 'Hello AK'

// Parameters vs Arguments
// When declaring a function, we specify the parameters
// When calling a function, we pass the arguments that are corresponding/related to the parameters
// Every function in JavaScript 'implicitly' returns undefined unless we 'explicitly' specify a 'return' value.

add(2, 2);  // where functionName: add, arguments that corresponds to the function parameters: a = 2, b = 2
// if without a 'return', output for function add is undefined. This is because we did not explicitly specify 'return' value
// when we added 'return' in the function body, the output is then the return value from the sum of a + b = 2 + 2 = 4

square(2); // where functionName: square, argument: a = 2
// expected output without return: undefined
// expected output with return expression: the return value from the multiplication of a * a = 2 * 2 = 4

// so we return back to the tutorial example of food processor
// function fruitProcessor(apples, oranges) { // where functionName: fruitProcessor, parameters: apples & oranges
//     // function body
//     console.log(apples, oranges);
//     // return console.log('Juice with ', apples, ' pieces of Apples and ', oranges, 'pieces of Oranges.');
//     // a preferred way is to save the return expression in a variable like below
//     const juice = console.log('Juice with ', apples, ' pieces of Apples and ', oranges, 'pieces of Oranges.');
//     // and include return expression corresponding to the variable
//     return juice;
// }

// fruitProcessor(2, 3);

// so if we want to call a function from another function
// for example we want create a function to calculate how many pieces each fruit need to be cut before putting it in the food processor
function cutFruitPieces(fruit) { // where functionName: cutFruitPieces, parameter: fruit
    return fruit * 4; // where the return expression is the return value of the calculation fruit * 4
}

function fruitProcessor(apples, oranges) {
    // here we call the function cutFruitPieces from inside the fruitProcessor function and returns the value
    // and save the value in the variables applePieces and orangePieces
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    // then we replace the variables in the return expression below
    const juice = console.log(`Juice with ${applePieces} pieces of Apple and ${orangePieces} pieces of Orange.`)
    return juice;
}

// let's make another example
// create a function that tells how many portions of rice and water is needed to cook rice for n number of guest
//first create a function 'cookRice'
function cookRiceForGuest(guest) { //where the parameter is guest
    //function body
    const cupsOfRice = guest * 1;
    const cupsOfWater = cupsOfRice + 1.5;

    const result = console.log(`You need to add ${cupsOfRice} cups of rice 
and ${cupsOfWater} cups of water in the rice cooker.`);
    return result;

}

const cookRice = cookRiceForGuest(prompt('How many people is going to eat rice?'));



