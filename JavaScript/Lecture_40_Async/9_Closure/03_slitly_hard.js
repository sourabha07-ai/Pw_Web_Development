function outer() {
    let x = 10;

    return function inner() {
        x += 5;
        return x;
    };
}

const fn = outer();

console.log(fn());
console.log(fn());
console.log(fn());