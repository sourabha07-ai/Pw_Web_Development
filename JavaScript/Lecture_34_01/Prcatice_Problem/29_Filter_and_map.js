let numbers = [10, 15, 20, 25, 30, 35, 40];

// 1. Get numbers greater than 20
// 2. Multiply them by 2

// Expected:
// [50, 60, 70, 80]

let res1 = numbers.filter(value =>{
        return value > 20;
}) ;

// console.log(res1);

let res2 = res1.map(value =>{
        return value * 2;
});

console.log(res2);