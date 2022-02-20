/*
// 20 Feb 2022
// activate strict mode to make code more secure
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
*/

// JavaScript functions

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
