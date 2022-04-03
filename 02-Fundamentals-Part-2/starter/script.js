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
*/

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

/*
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



// 41. Coding challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15 % of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20 %.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above(you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most.Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// own attempt
const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    }
    else {
        return billValue * 0.2;
    }
}

// console.log(calcTip(301));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// bonus
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);

// answers from lecture
// using conditional operator --> syntax: condition ? exprIfTrue : exprIfFalse;

const calcTips = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const billS = [125, 555, 44];
const tipS = [calcTips(billS[0]), calcTips(billS[1]), calcTips(billS[2])];
const totalS = [billS[0] + tipS[0], billS[1] + tipS[1], billS[2] + tipS[2]];
console.log(billS, tipS, totalS);

// recap array
const khairiArray = {
    'Ahmad',
    'Khairi',
    2022 - 1985,
    'Engineer',
    ['Iman', 'Ezra', 'Khayr']
};

// 42. Introduction to Objects

// {} refers to object, [] refers to array
// object contains key:value pairs
const khairi = {
    // key:value pair #1
    firstName: 'Ahmad Khairi',
    // key:value pair #2
    lastName: 'Hamzah',
    // key:value pair #3
    age: 2022 - 1985,
    // key:value pair #4
    job: 'Engineer',
    // key:value pair #5
    friends: ['Iman', 'Ezra', 'Khayr']
};
console.log(khairi);
// the above example, the object 'khairi' contains 5 key-value pairs/ properties.
// keys are also called as properties
// use arrays for structured/ ordered data e.g. to retrieve data based on their order no
// use objects for unstructured/ unordered data e.g. to retrieve data based on their property name

// 43. Dot '.' vs Bracket [] notation

// how to retrieve and change data in object

const khairi = {
    // key:value pair #1
    firstName: 'Ahmad Khairi',
    // key:value pair #2
    lastName: 'Hamzah',
    // key:value pair #3
    age: 2022 - 1985,
    // key:value pair #4
    job: 'Engineer',
    // key:value pair #5
    friends: ['Iman', 'Ezra', 'Khayr']
};
console.log(khairi);

// 1st way: dot '.' notation
console.log(khairi.lastName);

// 2nd way: bracket notation
console.log(khairi['firstName']);

// with bracket notation, we can enter any expression/ compute it from some operation (computed property name)

// store the repeating key 'Name': firstName, lastName in a variable place it in an expression/operation
const nameKey = 'Name';
console.log(khairi['first' + nameKey]);
// what is happening in the line above?
// 1stly the nameKey value 'Name' is replaced in the bracket: ['first' + 'Name']
// 2ndly both strings 'first' and 'Name' is concatenated/combined with the + operator: ['firstName']
// then the object 'khairi' retrieves the value from the key/property 'firstName' --> 'Ahmad Khairi'

console.log(khairi['last' + nameKey]);
// strings 'last' and 'Name' is concatenated: 'lastName'
// retrieves the value from key/property 'lastName' from the object 'khairi'

// we cannot do like this using dot notation:
// console.log(khairi.'last' + nameKey); // outputs error unexpected string

// let's say we get from prompt
const interestedIn = prompt('What do you want to know about Khairi? Choose between firstName, lastName, age, job and friends');
console.log(khairi.interestedIn); // console returned undefined. Why? Because there is no property 'interestedIn' that exists in the object 'khairi'

// to solve it, use bracket notation:
console.log(khairi[interestedIn]);

// create a logic to output a string when user prompts falsy/ undefined value
if (khairi[interestedIn]) {
    console.log(khairi[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends.');
}

// how to use both dot and bracket notation to add new properties to the object
khairi.location = 'Malaysia';
khairi['instagram'] = '@a_khairi_h';
console.log(khairi);

// Challenge
// Output into console: "Ahmad Khairi have 3 friends, and his best friend is called Iman"
console.log(`${khairi.firstName} have ${khairi.friends.length} friends, and his best friend is called ${khairi.friends[0]}`);

// 44. Object Methods

const khairi = {
    // key:value pair #1
    firstName: 'Ahmad Khairi',
    // key:value pair #2
    lastName: 'Hamzah',
    // key:value pair #3
    birthYear: 1985,
    // key:value pair #4
    job: 'Engineer',
    // key:value pair #5 in the form of an array
    friends: ['Iman', 'Ezra', 'Khayr'],
    hasDriversLicense: true,

    // key:value pair #6 in the form of a function expression
    // calcAge: function (birthYear) {
        //     return 2022 - birthYear;
        // }

        // key:value pair #7 using 'this' keyword
        // definition of 'this': the object that is executing the current function
        // calcAge: function () {
            //     console.log(this);
            //     return 2022 - this.birthYear;
            // }

            // key:value pair #8 using 'this'
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    // solution to challenge
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${khairi.job}, and he ${this.hasDriversLicense ? 'has a' : 'does not have a'} driver's license.`
    }
};

// calling a function from an object using dot notation
// console.log(khairi.calcAge(1985));

// using 'this' method 1: performs 1 time calculation and store in 'age'
console.log(khairi.calcAge());

// using 'this' method 2: saved value in 'age' is called
console.log(khairi.age);

// calling a function from an object using bracket notation
// console.log(khairi['calcAge']());
console.log(khairi['age']);

// Challenge
// "Ahmad Khairi is a 37 year old engineer, and he has a driver's license"
console.log(khairi.getSummary());

//31/3/2022 @ 10.10PM
// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
// Remember: BMI = mass / height ** 2 = mass/ (height * height)(mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
// Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
// Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

console.log(mark, john);
console.log(mark.calcBMI());

john.calcBMI();
console.log(john.bmi);

// "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.calcBMI() > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.bmi})
    )`)
} else if (john.bmi > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})`)
}
else {
    console.log(`They are the same`)
}

// 46. Iteration: The for loop

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}


// 47. Looping Arrays, Breaking and Continuing

// {} refers to object, [] refers to array
// object contains key:value pairs
const khairi = [
    // Array [0]
    'Ahmad Khairi',
    // Array [1]
    'Hamzah',
    // Array [2]
    2022 - 1985,
    // Array [3]
    'Engineer',
    // Array [4]
    ['Iman', 'Ezra', 'Khayr'],
    // Array [5]
    true
];

// manually we use loops to achieve the below:
// console.log(khairi[0]);
// console.log(khairi[1]);
// console.log(khairi[2]);
// console.log(khairi[3]);
// console.log(khairi[4]);

//replace the above with a for loop
// for (let i = 0; i < 4; i++) {
//     console.log(khairi[i], typeof khairi[i]);
// }

// if we don't know the length of the Array, instead of putting in the number of Array, we use .length
// for (let i = 0; i < khairi.length; i++) {
//     console.log(khairi[i], typeof khairi[i]);
// }

// use for loop to create a new array
// first create an empty array outside of the loop
const types = [];

// normally this is how we create an array:
// types[0] = 'string';

// but instead, we insert it in the for loop and replace the number of Array with [i] like this
for (let i = 0; i < khairi.length; i++) {
    // Reading from khairi array:
    console.log(khairi[i], typeof khairi[i]);

    // First way: Filling types array:
    // types[i] = typeof khairi[i]; // types[0] = typeof khairi[0];

    // Alternatively, we could also use push method where it adds element at the end of an array:
    types.push(typeof khairi[i]);
}

console.log(types);

// exercise: calculate the age from the birth years below
const years = [1985, 1986, 2017];

// create an empty array to hold the ages
const ages = [];

// create a for loop and print to console the ages
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

// next is to learn 2 important statements in loops: continue and break
// continue is used to exit the current iteration of the loop and continue to the next one
// break is used to completely terminate the whole loop

// how to use continue statement in khairi array
console.log('=== ONLY STRINGS ===');
for (let i = 0; i < khairi.length; i++) {
    // if the value of the array is not a string it will not be printed out and exit the current iteration then continue to the next array
    // for example khairi[2] = 2022 - 1985 which is a number and not a string so the condition is TRUE
    // when the condition is TRUE, then the continue statement will run which then will exit the current iteration/line of code
    if (typeof khairi[i] !== 'string') continue;

    // this next line of code is not executed when continue statement above is TRUE e.g. a number.
    console.log(khairi[i], typeof khairi[i]);
}

// how to use break statement in khairi array
console.log('=== BREAK WITH NUMBER ===');
for (let i = 0; i < khairi.length; i++) {
    // if the value of the array is a number, the break statement will run and immediately exit the loop completely
    // array[2] is a number, so the break statement will run and exit the loop completely
    // the rest of the array is not executed
    if (typeof khairi[i] === 'number') break;

    // this next line of code is not executed once the condition above is TRUE and the loop is terminated
    console.log(khairi[i], typeof khairi[i]);
}


// 48. Looping Backwards and Loops in Loops

const khairi = [
    // Array [0]
    'Ahmad Khairi',
    // Array [1]
    'Hamzah',
    // Array [2]
    2022 - 1985,
    // Array [3]
    'Engineer',
    // Array [4]
    ['Iman', 'Ezra', 'Khayr'],
    true
];

// How to loop array backwards: Array [4] - [0]
for (let i = khairi.length - 1; i >= 0; i--) {
    console.log(i, khairi[i]);
}

// How to create a loop inside of a loop
// Example: Repeat exercise 3 times with 5 repetitions per exercise
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`=========== Starting Exercise ${exercise}`);

    // Inner 'repetition' loop will repeat until complete then exit current Main 'exercise' loop and start again
    for (let repetition = 1; repetition <= 5; repetition++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${repetition}`);
    }
    // In total 3*5=15 repetitions
};


// 49. The while loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }

// while loop will run when the while condition is TRUE e.g. rep <= 10

let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

// Example: Generate a Random variable - roll a dice until we get the number 6
// let dice = Math.random() * 6;
// MDN: The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)

let dice = Math.trunc(Math.random() * 6) + 1;
// MDN: The Math.trunc() function returns the integer part of a number by removing any fractional digits.
// + 1 is added at the end so that number is not = 0
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
// Conclusion: The while loop does really not have to depend on any counter variable. Whenver we need a loop without a counter, we can use the while loop. That happens whenever we do not know beforehand how many iterations the loop will have.
*/

// 50. Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
    // Run 1st statement: Calculate the tips from bills
    const calcTip = function () {
        if (bills[i] >= 50 && bills[i] <= 300) {
            return bills[i] * 0.15;
        }
        else {
            return bills[i] * 0.2;
        }
    }

    // Run 2nd statement: Add the result of calcTip to the tips array using .push method
    tips.push(calcTip(bills[i]));

    // Run 3rd statement: Add bills and tips and transfer the result to totals using .push method
    totals.push(bills[i] + tips[i]);

    // Print to console
    console.log(`For bill amount ${bills[i]}, the tip is ${tips[i]} and the total is ${totals[i]}`);
}

// Create a function to calculate the average of all numbers where average = sum / count

// sum is equal to all of the totals array
// sum = totals[0] + totals[1] ... totals[9]
// count is equal to the length of the array
// let sum = 0;
// for (let i = 0; i < totals.length; i++) {
//     sum += totals[i];
// }
// console.log(sum);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i]; // alternative to the above
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));





