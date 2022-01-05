/*
//10. Values and Variables

let js = "amazing";
//popup is disabled
//if (js === 'amazing') alert('JavaScript is FUN!');
console.log(40 + 45 + 50);

//Khairi is a value
console.log("Khairi");

//36 is also a value
console.log(36);

//declaring a variable and assigning the value "Khairi" using camelCase naming convention
let firstName = "Khairi";

//instead of using console.log to display a literal value, we can also use the variable
console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable with underscore
let ahmad_khairi = "AK";

//a variable can start with a dollar symbol
let $function = 27;
console.log($function);

//a variable cannot start with a number
//let 3dollars = 3;

//a variable can start with an underscore
let _3dollars = 3;
console.log(_3dollars);

//by convention, don't start a variable with an Uppercase because it is a reserved keyword. It's not illegal so in certain case there will not be an error
let FirstName = "Ahmad Khairi";
console.log(FirstName);

//all variables with UPPERCASE are reserved for constants
let PI = 3.1415;
console.log(PI);

//it is better to name a meaningful and descriptive variable that is easier to understand
let myFirstJob = "Engineer"
let myCurrentJob = "Manager";

//rather than
let job1 = "Engineeer";
let job2 = "Manager";


//12. Data Types

//boolean data type
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//typeof is an operator that returns a string indicating the type of the value or variable
console.log(typeof javaScriptIsFun);
console.log(typeof 36);
console.log(typeof "Ahmad Khairi");
console.log(typeof $$$);

//to change a value in a variable, don't use let. instead just use the variable name
javaScriptIsFun = "hello world!";
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

//when we define a variable w/o a value, the output is expected to be an undefined data type
let year;
console.log(typeof year);

//reassign the variable year with a value
year = 2021;
console.log(year);
//the data type changed from undefined to number
console.log(typeof year);

//null is stated as 'object" data type but it is actually not. this is a bug
console.log(typeof null);


//13. let, const and var

//let is used when a value will change in the future
let age = 36;
age = 37;

//const is used when a value is fixed
const birthYear = 1985;
//changing a const value will return an error
// birthYear = 1986;

//avoid using var at all cost!
var job = "engineer";
//var allows the reassignment of the value and returns no error
job = "manager";

//never write a variable name without declaring it either as let, const or var
lastName = "hamzah";
console.log(lastName);


//14. Basic Operators

// math operators
// - is subtraction operator
const now = 2021;
const ageKhairi = now - 1985;
const ageIman = now - 2017;

//we can display 2 variables by using , (comma)
console.log(ageKhairi, ageIman);

//we can also combine strings and variables
console.log("I am", ageKhairi, "years old.");
console.log("Iman is", ageIman, "years old.");

//we can do multiple math calculations in a single console
console.log(ageIman * 2, ageKhairi / 10);
// * is a multiplication operator
// / is a division operator

//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(2 ** 3);
// ** is an exponentiation operator

//we can use + as an addition operator or combine 2 strings (string concatenation)
const firstName = "Ahmad Khairi";
const lastName = "Hamzah";
console.log(firstName + " " + lastName);
//to add a space in between the firstName and lastName, we add a string in the middle with an empty space

//next is assignment operators such as =, +=, *=
let x = 10 + 5; //15
console.log(x);

x += 10; // x = x + 10 = 15 + 10 = 25
console.log(x);

x *= 4; // x = x * 4 = 25 * 4 = 100
console.log(x);

x /= 2; // x = x / 2 = 100 / 2 = 50
console.log(x);

x++; // x = x + 1 = 50 + 1 = 51
console.log(x);

//next is comparison operators such as >, >=, <, <=, == (used to produce boolean values)
console.log(ageIman < ageKhairi); // true
console.log(1 == 2); // false
console.log(now - 1985 > now - 2017);


// 15. Operator Precedence
const now = 2021;
const ageKhairi = now - 1985;
const ageIman = now - 2017;

console.log(now - 1985 > now - 2017);
//subtraction operator precendence is higher than comparison operator
// so the subtraction operator will be executed first
// now - 1985 and now - 2017 --> 36 and 4
// next comparison operator will be executed
// is 36 > 4 ? --> result is true

// console.log(20 - 10 - 5); // subtraction is calculated/executed from left to right

let x, y;
x = y = 20 - 10 - 5;
console.log(x, y);
// by order of precedence, subtraction operator will be executed first from left-to-right --> 20 - 10 - 5 = 5
// next the assignment operator will be executed because of lower precedence from right-to-left --> y = 5 and x = 5

// const averageAge = ageKhairi + ageIman / 2;
// console.log(ageKhairi, ageIman, averageAge);
// the result for averageAge is incorrect because the division operator has higher precedence than the addition operator,
// so ageIman / 2 will be executed first --> 4 / 2 = 2
// next the addition operator will be executed --> 36 + 2 = 38
// the solution is to use () or known as the grouping operator as below:
const averageAge = (ageKhairi + ageIman) / 2;
// (36 + 4)/ 2 = 20
console.log(ageKhairi, ageIman, averageAge);


// Coding Challenge #1
// Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula(you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.

// Test Data 1
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// Test Data 2
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);


// 17. Strings and Template Literals
const firstName = 'Ahmad Khairi';
const job = 'engineer';
const birthYear = 1985;
const year = 2022;

// writing strings using single or double quotes and concatenate multiple strings together using +
const aboutMe = "Hello! I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(aboutMe);

// How to write template literals to simplify strings concatenation
const aboutMeNew = `Hello! I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// use backticks `` on top of tab key to define template literals
// use syntax ${variable} to insert variable
console.log(aboutMeNew);

// How to write multi-line strings before ES6
console.log('Before ES6, "backslash n backslash" is used to write multi-line strings \n\
like in this example \n\
here.');

// How to write multi-line strings in ES6 using backticks aka template literals
console.log(`ES6 uses backticks
to write multi-line strings
like in this example
here.`);


// 18. Taking decisions using if / else statements

const age = 18;
const yearsLeft = 18 - age;

if (age >= 18) {
    console.log('You can get your driving license!');
} else {
    console.log(`You are too young to drive! Wait another ${yearsLeft} years.`)
}

const birthYear = 1985;
let century;

if (birthYear <= 2000) {
    century = 20;
    console.log(`You are born in the ${century}th century`);
} else {
    century = 21;
    console.log(`You are born in the ${century}st century`);
}


// 19. Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//
// 2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
// BMI(28.3) is higher than John's (23.9)!"
//
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

// Test Data 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

// Test Data 2
// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = johnBMI > markBMI;

console.log(markBMI, johnBMI, markHigherBMI, johnHigherBMI);

// we could do like this: the most common way
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

//or we could do it like this:
if (markHigherBMI == true) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


// 20. Type conversion and coersion
// Conversion - manually convert one data type to another
// Coersion - JS automatically converts data type

// Type conversion:
// 1st example: conversion to numbers data type using Number() function
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(typeof inputYear);  // checks the type of date for inputYear variable

// A string in the form of text such as names cannot be converted to numbers such as below:
console.log(Number('Khairi')); // outputs NaN in the browser console which stands for Not a Number
console.log(typeof NaN);    // checks the type of data for NaN

// 2nd example: conversion to string data type using String() function
const newYear = 2022;
console.log(String(2022), 2022);    // notice in browser console that string value is written in white text while number is in purple


// Type coercion: JS automatically converts values from one data type to another

// 1st example: plus "+" operator triggers a type coercion --> a number value will be converted to a string
// hence 36 is first converted to a string '36' and all 3 strings will be concatenated
console.log('I am ' + 36 + ' years old.'); // outputs string: I am 36 years old.

// 2nd example: minus "-" operator triggers a type coercion --> a string value will be converted to a number
// hence '20' and '10' are first converted to numbers
console.log('20' - '10' - 5); // outputs number: 5

// 3rd example: "*" or "/" operator triggers a type coercion --> a string will be converted to a number
console.log('5' * '6'); // outputs number: 30
console.log('10' / '2'); // outputs number: 5

// 4th example: combination of different operators and data types
console.log('10' + 1 - 5);
// the number 1 is first converted from number to string and the result is '10' + '1' = '101'
// '101' is then converted from string to the number 101 and minus the number 5 which equals to the number 96

// Quiz
let n = '1' + 1; // the number 1 is first converted to a string and two strings is then concatenated to get '11'
n = n - 1; // the string '11' is first converted to number 11 and minus 1 to get the result of the number 10
console.log(n);

console.log(2 + 3 + 4 + '5');
// the numbers 2, 3 and 4 will be added to get the number 9,
// then it is converted to a string '9'
// lastly strings '9' and '5' is concatenated to get the string '95'

console.log('10' - '4' - '3' - 2 + '5');
// the strings '10', '4' and '3' is first converted to numbers
// 10 - 4 - 3 - 2 is calculated to get the number 1
// the number 1 is then converted to a string '1'
// strings '1' and '5' is then concatenated to get the string '15'


// 21. Truthy and Falsy values

// Falsy values are values that are not exactly false but will become false when we try to convert them into a boolean.
//There are 5 falsy vaLues: 0, '', undefined, null, NaN
// Everything else are truthy false e.g. any number that is not 0, any string that is not an empty string will be converted to true when we try to convert them into a boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Khairi'));
console.log(Boolean({})); // where {} is for empty object
console.log(Boolean(''));

// A conversion to Boolean is always implicit, not explicit or in other words always type coercion

// Example of type coercion in if else condition
const money = 10;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}
// Output: The condition in else is executed because the variable money is assigned with 0 which is a falsy value.
// When money is assigned with the value 10, the condition becomes truthy so the if condition is executed.

// Another example is to test if a variable is defined with a value or undefined
let height = 1;
if (height) {
    console.log(`Height is ${height}`);
} else {
    console.log("Height is UNDEFINED!");
}
// Output: The condition in else is executed when height is either undefined or 0 which are falsy values.
// When height is assigned with a value 1, the condition becomes truthy so the if condition is executed.


// 22. Equality operators

// A single equal sign (=) is an assignment operator e.g. assigning a value to a variable  --> age = 18
const age = 18;

// A double equal sign (==) is a loose equality operator that returns a Boolean result and also does type coercion e.g. '18' == 18 outputs true condition
// Avoid to use loose equality operator as much as possible to avoid unknown bugs
if (age == '18') console.log(`You are ${age} years old.`)

// A triple equal sign (===) is a  strict equality operator that returns a Boolean result e.g. 18 === 18 returns a true output but 19 === 18 returns a false output
if (age === 18) console.log(`You are an adult.`);

// Example: Ask user to enter a number using the function: prompt(), save it in a variable and display in the console
const favoriteNumber = Number(prompt("What is your favorite number?")); // Function Number() is used to convert string to number data type
console.log(favoriteNumber);

// Check the type of data
console.log(typeof favoriteNumber); // returns a string data type even when a number is entered

// Do a loose equality check
if (favoriteNumber == 1) { // '1' is equal to 1 because of type coercion so the condition is true
    console.log("That is my favorite number too!");
}

// Do a strict equality check
if (favoriteNumber === 1) { // '1' is not equal to 1 so the condition is false
    console.log("Awesome!")
}
// using else if
else if (favoriteNumber === 2) {
    console.log("That's good!")
} else {
    console.log("Whatever floats your boat!")
}

// using strict non-equality operator !==
if (favoriteNumber !== 1) {
    console.log("Ok we get it. You don't like being number 1 :)")
}
*/

// 23. Boolean logic

