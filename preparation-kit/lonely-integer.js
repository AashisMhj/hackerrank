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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    a.sort((a, b) =>{
        if(a < b){
            return -1;
        }
        if(a > b){
            return 1
        }

        return 0;
    });
    console.log(a)
    for(let i = 0; i < a.length; i = i +2){
        if(a[i] === a[i+1]){
            continue
        }else{
            return a[i]
        }
    }
}

function main() {
    const ws = fs.createWriteStream('./input.txt');

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
