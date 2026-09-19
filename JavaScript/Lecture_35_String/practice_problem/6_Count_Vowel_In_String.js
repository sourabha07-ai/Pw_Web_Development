let str = "javascript";
let count = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    // check vowel here
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] ==="u"){
        count++;
    }
}

console.log(count);