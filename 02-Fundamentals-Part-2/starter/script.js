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
// first create a function 'cookRice'
function cookRiceForGuest(guest) { //where the parameter is guest
    //function body
    const cupsOfRice = guest * 1;
    const cupsOfWater = cupsOfRice + 1.5;

    const result = console.log(`You need to add ${cupsOfRice} cups of rice
    and ${cupsOfWater} cups of water in the rice cooker.`);
    //     const result = alert(`You need to add ${cupsOfRice} cups of rice
    // and ${cupsOfWater} cups of water in the rice cooker.`);
    return result;
}

// call up the function and save the value in a variable
const cookRice = cookRiceForGuest(prompt('How many people is going to eat rice?'));

// 6 March 2022 @ 5.43 pm
// Chapter 37. Reviewing Functions
// There are 3 different function types:

// // 1) below is type: function declaration
// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }
// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirementAge = 65 - age;
//     // return retirementAge;
//     return `${firstName} will retire in ${retirementAge} years`;
// }

// // 2) below is type: function expression
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirementAge = 65 - age;
//     // return retirementAge;
//     return `${firstName} will retire in ${retirementAge} years`;
// }

// below is type: arrow function (remember that it is a form of function expression)
const calcAge = birthYear => 2022 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} will retire in ${retirementAge} years`;
}

console.log(yearsUntilRetirement(1985, 'Ahmad Khairi'));


// 7 March 2022 @ 12.36 pm
// 38. Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated(so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
//     Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


// The non-function way to solve this:
// Test Data 1
// let dolphinsScore1 = 44;
// let dolphinsScore2 = 23;
// let dolphinsScore3 = 71;

// let koalasScore1 = 65;
// let koalasScore2 = 54;
// let koalasScore3 = 49;

// Test Data 2
// let dolphinsScore2 = 85;
// let dolphinsScore1 = 54;
// let dolphinsScore3 = 41;

// let koalasScore1 = 23;
// let koalasScore2 = 34;
// let koalasScore3 = 27;

// Test Data 3
// let koalasScore1 = 85;
// let koalasScore2 = 54;
// let koalasScore3 = 41;

// let dolphinsScore1 = 23;
// let dolphinsScore2 = 34;
// let dolphinsScore3 = 27;

// const avgDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const avgKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// if ((avgDolphins > avgKoalas) && (avgDolphins / avgKoalas >= 2)) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
// }
// else if ((avgDolphins < avgKoalas) && (avgKoalas / avgDolphins >= 2)) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
// }
// else {
//     console.log('No team wins');
// }

// Solution:

// using arrow function
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// or using function declaration
// function calcAverage(a, b, c) {
//     return (a + b + c) / 3;
// }

// console.log(calcAverage(2, 3, 4)); // test if function is working

// // Call up function for Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// // using function expression
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     }
//     else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     }
//     else {
//         console.log('No team wins');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// code without looking at the solution

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}`);
    }
    else {
        console.log('No team wins');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Recap from Fundamentals Part 1

// switch-case statement
const time = prompt('Please specify the time to check your schedule');

switch (time) {
    case '7am':
    case '8am':
        console.log('Go jogging');
        break;
    case '9am':
        console.log('Send Iman to school');
        break;
    case '10am':
        console.log('Eat breakfast');
        break;
    case '11am':
        console.log('Do work!');
        break;
    case '12pm':
    case '1pm':
    case '2pm':
        console.log('Lunch break');
        break;
    default:
        console.log('Not a valid time')
}


// conditional operator
// syntax: condition ? exprIfTrue : exprIfFalse;
const age = 18;

age >= 18 ? console.log('Get a job!') : console.log('Study hard!');


// Exercise: How to create a calculator using JavaScript
// source: YouTuber Dani Krossing

function calc() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);
    let op = document.querySelector("#operator").value;
    let calculate;

    if (op == "add") {
        calculate = a + b;
    }
    else if (op == "min") {
        calculate = a - b;
    }
    else if (op == "div") {
        calculate = a / b;
    }
    else if (op == "mul") {
        calculate = a * b;
    }
    // console.log(calculate);
    document.querySelector("#result").innerHTML = calculate;
}


// 39. Introduction to Arrays

const friend1 = 'Ahmad';
const friend2 = 'Khairi';
const friend3 = 'Hamzah';

// to make an array, do like this
const friends = ['Ahmad', 'Khairi', 'Hamzah'];
console.log(friends);

// another way to make array using Array function
const years = new Array(1985, 1986, 2017);

// how to call up an array
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// to get number of elements in the array, do this
console.log(friends.length);

// to get the last element in the array, do this
console.log(friends[friends.length - 1]);

// to replace content of an array is possible even when declared as const
friends[2] = 'Bin';
console.log(friends);

// but we cannot replace a const array like this
// friends = ['Iman', 'Ezra', 'Khayr']; // commented to remove error in console

// an array can hold value of different types
const myInfo = ['Ahmad Khairi', 'Hamzah', 2022 - 1985, 'Engineer', friends];
console.log(myInfo);
console.log(myInfo.length);

// Array exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const birthYears = [1985, 1986, 2017];

// don't do this
console.log(calcAge(birthYears)); // expected output NaN

// instead do like this
const myAge = calcAge(birthYears[0]);
const sumaiyyahAge = calcAge(birthYears[1]);
const imanAge = calcAge(birthYears[2]); // or calcAge(birthYears(birthYears.length - 1));
console.log(myAge, sumaiyyahAge, imanAge);

// we can put function calls in an array like this
const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[2])]
console.log(ages);
*/

// 40. Basic Array Operations (Methods)

const friends = ['Ahmad', 'Khairi', 'Bin'];

// first method: push --> adds element to the end of an array
friends.push('Hamzah');
console.log(friends); // expected output 'Ahmad' 'Khairi' 'Bin' 'Hamzah'

// push is a function thus it can return something e.g. we can save as variable to show the length of the array
const newLength = friends.push('Idris');
console.log(newLength); // expected output 5

// second method: unshift --> adds element at the start of an array
friends.unshift('Mr.');
console.log(friends); // expected output 'Mr.' 'Ahmad' 'Khairi' 'Bin' 'Hamzah' 'Idris'

// third method: pop --> removes the last element of an array
friends.pop();
console.log(friends); // expected output 'Mr.' 'Ahmad' 'Khairi' 'Bin' 'Hamzah'

// to capture the element that is removed, save the function in a variable
const popped = friends.pop();
console.log(popped); // expected output 'Hamzah'

// fourth method: shift --> removes the first element of an array
friends.shift();
console.log(friends); // expected output 'Ahmad' 'Khairi' 'Bin'

// fifth method: indexOf --> to tell a position of an element in an array
console.log(friends.indexOf('Khairi')); // expected output 1

// for an element that is not in the array
console.log(friends.indexOf('Hamzah')); // expected output -1

// sixth method: includes --> indicates true or false if an element is in the array or not
// similar method to indexOf method but more modern and useful (ES6)
console.log(friends.includes('Ahmad')); // expected output true
console.log(friends.includes('Hamzah')); // expected output false

// includes method can be used in conditional operator (because it returns boolean)
if (friends.includes('Iman')) {
    console.log('Yes you have the element');
}
else
    console.log("No you don't have that element in here");





