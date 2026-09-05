let numbers = [10, 50, 20, 80, 30];

let res = numbers.reduce((current_max,value)=>{
        return value > current_max ? value: current_max;

},numbers[0]);

console.log(res);