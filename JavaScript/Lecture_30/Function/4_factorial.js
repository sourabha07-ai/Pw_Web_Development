function factorial(n) {
    // your code
    let fact = 1;
    for(let i = n; i > 0;i--){
         fact *= i;
    }
    return fact;
}

console.log(factorial(5));