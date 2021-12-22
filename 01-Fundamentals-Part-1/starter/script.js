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
*/

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


