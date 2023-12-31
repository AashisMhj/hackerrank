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
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {

    arr.sort((a,b) =>{
        if( a < b){
            return -1;
        }
        if( a > b){
            return 1;
        }
        return 0;
    });
    console.log(arr)
    const median_index = Math.floor(arr.length /2);
    return arr[median_index];

}

function main() {
    const ws = fs.createWriteStream('./input.txt');

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = findMedian(arr);
    console.log(result)

    ws.write(result + '\n');

    ws.end();
}
