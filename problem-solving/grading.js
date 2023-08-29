'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    function findNearestFiveMultiple(num) {
        return  Math.ceil(num /5) * 5;
    }

    for(let i = 0; i < grades.length; i++){
        let current_grade = grades[i];
        if(current_grade >= 38){
            const nearest_five =  findNearestFiveMultiple(current_grade)
            if(nearest_five - current_grade < 3){
                grades[i] = nearest_five;
            }
        }
    }

    return grades
}

function main() {
    const ws = fs.createWriteStream('./output.txt');

    // const gradesCount = parseInt(readLine().trim(), 10);

    // let grades = [];

    // for (let i = 0; i < gradesCount; i++) {
    //     const gradesItem = parseInt(readLine().trim(), 10);
    //     grades.push(gradesItem);
    // }

    const my_grades = [73,67,38,33]

    const result = gradingStudents(my_grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
