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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let l_to_r = 0;
    let r_to_l = 0;
    for(let i =0; i < arr.length; i++){
        l_to_r += arr[i][0+i];
        r_to_l += arr[i][arr[i].length -(1 + i)];
    }
    return Math.abs(l_to_r - r_to_l);

}

function main() {
    const ws = fs.createWriteStream('./input.txt');

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    // for (let i = 0; i < n; i++) {
    //     arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // }

    const my_array = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ]

    const result = diagonalDifference(my_array);

    ws.write(result + '\n');

    ws.end();
}
