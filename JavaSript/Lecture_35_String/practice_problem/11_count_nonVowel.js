let str = "javascript";
let count = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
        // your logic
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
                continue;
        } else {
                count++;
        }

}

console.log(count);