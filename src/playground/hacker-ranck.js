'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// comparision problem
// Complete the compareTriplets function below.
// var a = 3 2 4;
// var b = 5 2 1;
function compareTriplets(a, b) {
// Create an array to hold integers for a and b
    var arrA = [];
    var arrB = [];
    var combinedAr = [];
    arrA.push(a);
    arrB.push(b);
    var outcomeA =0;
    var outcomeB =0;
// Iterrate through both arrays and compare both at the index position
    for (var i = 0; i < 3; i++) {
        if (arrA[i] > arrB[i]) {
            outcomeA++;
            console.log(outcomeA);
        };
        if (arrA[i] < arrB[i]) {
            outcomeB++;
            console.log(outcomeB);
        };
    };
    combinedAr.push(outcomeA, outcomeB);
    return combinedAr;
// USE IF STATEMENT
// If array a's integer is larger than b's integer, a is given a point, vice versa
// If integers are equal, no point is given
// Lastly, return an array, describing whether a or b, was awarded more points

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
