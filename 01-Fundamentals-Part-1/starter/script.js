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
*/

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