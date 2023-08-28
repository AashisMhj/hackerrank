function findParisWithSum(sortedArray, target){
    let left = 0;
    let right = sortedArray.length -1;
    const pairs = [];

    while(left < right){
        const sum = sortedArray[left] + sortedArray[right];

        if(sum === target){
            pairs.push([left, right]);
            left++;
            right--;
        }else if(sum < target){
            left ++;
        }else {
            right--;
        }
    }

    return pairs;
}

const sortedArray = [-10, -4, -3, 0, 0, 2, 4, 5, 6, 9, 10, 11];
const target = 10;
const pairs = findParisWithSum(sortedArray, target);

console.log(pairs);