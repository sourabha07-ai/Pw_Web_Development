let numbers = [2, 3, 4, 5];

let res = numbers.reduce((mul,value) =>{
        return mul * value
},1);

console.log(res);