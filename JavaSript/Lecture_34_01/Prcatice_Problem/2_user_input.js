const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 let arr = [12,13,14,15];

rl.question("Add number: ", (value) => {
    value = Number(value);
    arr.push(value);
    console.log("Array is:",arr);
    arr.pop();
    console.log("array: ",arr);
    rl.close();
});