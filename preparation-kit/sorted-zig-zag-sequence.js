function processData(input) {
    let data = input.split("\n")
    let input_string = data[2]
    const input_element = input_string.split(" ");
    input_element.map(el => parseInt(el)).sort((a, b) =>{
        if( a < b){
            return -1;
        }
        if(a > b ){
            return 1
        }
        return 0
    });
    let result = new Array(input_element.length);
    for(let i = 0; i < input_element.length; i++){
        if(i % 2 === 0){
            result[i/2] = input_element[i]
            continue;
        }else{
            result[input_element.length - ((i+1) /2)] = input_element[i];
            continue;
        }
    }
    console.log(result.join(" "))
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    const data = [2, 3, 5, 1, 4, 6, 7, 8, 9];
    processData(_input);
});
