let numbers = [10, 15, 20, 25, 30, 35];

// Find the sum of numbers greater than 20

let res1  = numbers.filter(value =>{
        return value > 20;
});

let res2 = res1.reduce((sum,value) =>{
        return sum + value;
},0);

console.log(res2);