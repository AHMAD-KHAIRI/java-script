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
*/

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
