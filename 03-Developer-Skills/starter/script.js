// Remember, we're gonna use strict mode in all scripts now!
'use strict';

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
