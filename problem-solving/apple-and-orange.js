'use strict';

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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let fallen_apples = 0;
    let fallen_oranges = 0;

    apples.forEach(el =>{
        const value = a + el;
        if(value >= s && value <= t){
            fallen_apples++;
        }
    });

    oranges.forEach(el =>{
        const value = b + el;
        if(value >= s && value <= t){
            fallen_oranges++;
        }
    });

    console.log(fallen_apples);
    console.log(fallen_oranges)

}

function main() {
    // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    // const s = parseInt(firstMultipleInput[0], 10);

    // const t = parseInt(firstMultipleInput[1], 10);

    // const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    // const a = parseInt(secondMultipleInput[0], 10);

    // const b = parseInt(secondMultipleInput[1], 10);

    // const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    // const m = parseInt(thirdMultipleInput[0], 10);

    // const n = parseInt(thirdMultipleInput[1], 10);

    // const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    // const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    const my_s = 7;
    const my_t = 10;
    const my_a = 4;
    const my_b = 12;

    const my_apples = [2, 3, -4]
    const my_oranges = [3, -2, -4]

    countApplesAndOranges(my_s, my_t, my_a, my_b, my_apples, my_oranges);
}
