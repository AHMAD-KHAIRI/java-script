// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
// if (x === 23) console.log(23);

const calcAge = birthYear => 2022 - birthYear;

// when just keying cl it will auto-complete console.log()
console.log(calcAge(1985));

// Node-RED JSON object
const testSignal =
    [
        {
            "name": "test endpoint",
            "description": "test",
            "unit": "",
            "values":
                [
                    {
                        "value": 2, "timestamp": "2022-04-08T05:32:47.409Z"
                    }
                ]
        },
        {
        "name": "test endpoint 1",
        "description": "test",
        "unit": "",
        "values": [{
            "value": 3, "timestamp": "2022-04-08T05:32:47.409Z"
        }]
    }
];


console.log(testSignal);
console.log(testSignal.length);
console.log(testSignal[0].values[0].value);
console.log(testSignal[0].values[0].timestamp);
console.log(testSignal[1].values[0].value);
console.log(testSignal[1].values[0].timestamp);


// 23 April 2022 @ 11.21 PM
// 59. Using Google, StackOverflow and MDN

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// ~ What is temp amplitude? Answer: difference between highest and lowest temp
// ~ How to compute max and min temperatures? 
// ~ What is a sensor error? What to do?

// 2) Breaking up into sub-problems
// ~ How to ignore sensor error?
// ~ Find max value in temp array
// ~ Find min value in temp array
// ~ Subtract min from max (amplitude) and return it

// Solution:
const calcTempAmplitude = function (temps) { 
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        // Third, replace repeating temps[i] with variable currentTemp
        const currentTemp = temps[i];

        // Fourth, ignore value in temp array which is not a number
        if (typeof currentTemp !== 'number') continue;

        // First, find max value in temp array
        if (currentTemp > max) max = currentTemp;

        // Second, find min value in temp array
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    
    // return the result of subtract min from max (amplitude)
    return max - min;
};

// first test the function with a test array
calcTempAmplitude([3, 7, 4]);
// max[0] = 3, is it greater than 3? False
// max[1] = 7, is it greater than 3? True
// max[2] = 4, is it greater than 3? False
// min[0] = 3, is it lower than 3? True
// min[1] = 7, is it lower than 3? False
// min[2] = 4, is it lower than 3? False

// then test with the actual array
calcTempAmplitude(temperatures);

// save the result of subtract min from max (amplitude) in a variable
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// ~ With 2 arrays should we implement function twice? NO! Just merge the 2 arrays

// 2) Breaking up into sub-problems
// ~ How to merge 2 arrays? 
// Answer: Use array.concat() method. Example taken from MDN:
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// Solution:
// function now to accept 2 arguments t1 and t2
const calcTempAmplitudeNew = function (t1, t2) { 
    // use array.concat() method and save in a new variable
    const temps = t1.concat(t2);
    // print in console the result of the 2 concatenated arrays
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return max - min;
};

// test function with 2 arrays
const amplitudeNew = calcTempAmplitudeNew([0, 1, 2],[3, 4, 5]);
console.log(amplitudeNew);


// 24 April 2022 @ 3.54 PM
// 61. Debugging with console and breakpoints

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',

        // C) Fix the bug
        value: Number(prompt('Degrees celcius:'))
    }

    console.log(measurement);
    console.log(typeof (measurement.value));
    
    // B) Find the bug
    // Display object in the form of a table
    console.table(measurement);

    const kelvin = console.log(`${measurement.value} Celcius is equal to ${measurement.value + 273} Kelvin`);
    return kelvin;
};
// A) Identify the bug
console.log(measureKelvin());

// Different console types
console.warn('This is a warning!');
console.error('This is an error!');

// We can use debugger statement to invoke debugging function in web console (if available)
//debugger;
*/

// 07.05.2022 @ 10.06 AM
// 62. Coding Challenge #1

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (data1, data2) {
//     const temp = data1.concat(data2);
//     console.log(temp);

//     for (let i = 0; i < temp.length; i++) {
//         console.log(`... ${temp[i]}ºC in ${[i + 1]} day`);
//     }
// };

// test function with array
// printForecast([12, 13, 14]);

// test function with test data
// printForecast(data1, data2);

// print function as a string
const printForecastAsAString = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${[i + 1]} days ... `;
    }
    console.log('... ' + str);
}

printForecastAsAString(data1.concat(data2));