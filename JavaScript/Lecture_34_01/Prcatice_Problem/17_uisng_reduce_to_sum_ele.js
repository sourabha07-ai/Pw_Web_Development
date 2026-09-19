let numbers = [10, 20, 30, 40];

let res = numbers.reduce((sum,value)=>{
        return sum + value;
},0);

console.log(res);