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

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const string_array = s.split(':')[0]
    const hour = parseInt(string_array);
    if(s.includes('AM')){
        if(hour === 12){
            return s.replace('AM', '').replace(/^(\d{2})/, '00')
        }
        return s.replace('AM', '');
    }

    const updatedTimeString = s.replace('PM', '').replace(/^(\d{2})/, hour === 12 ? hour : hour + 12);
    return updatedTimeString;

}

function main() {
    const ws = fs.createWriteStream('./input.txt');

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
