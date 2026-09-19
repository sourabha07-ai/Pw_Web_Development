//! 2. Function + Array + Calculation

function marks_result(arr){
    let sum = 0;

    for(let i = 0; i < arr.length;i++){
         sum += arr[i];
    }
    return sum;
}

let marks = [89,90,88,78,98,80];
let result = marks_result(marks);
 console.log(`Your result is ${result}`);