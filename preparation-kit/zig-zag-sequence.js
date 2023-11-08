function processData(input) {
    //Enter your code here
    let data = input.split("\n");
    let n = parseInt(data[1])
    let input_string = data[2];
    let input_data = input_string.split(" ").map(el => parseInt(el)).sort((a, b) =>{
        if(a < b){
            return -1;
        }
        if(b < a){
            return 1
        }
        return 0;
    });
    let mid = Math.floor((n + 1) /2) -1;
    let temp = input_data[mid];
    input_data[mid] = input_data[n-1];
    input_data[n-1] = temp;


    let start_index = mid +1;
    let end_index = n - 2;

    while (start_index <= end_index){
        let temp = input_data[start_index];
        input_data[start_index] = input_data[end_index];
        input_data[end_index] = temp;
        start_index++;
        end_index--;
    }

    console.log(input_data.join(" "))
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
