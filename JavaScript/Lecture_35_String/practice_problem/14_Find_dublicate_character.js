let str = "programming";

let n = str.length;
let printed = "";

for (let i = 0; i < n; i++) {

    let count = 0;

    // Count occurrences
    for (let j = 0; j < n; j++) {
        if (str[i] === str[j]) {
            count++;
        }
    }

    // Duplicate character
    if (count > 1 && !printed.includes(str[i])) {
        console.log(str[i]);
        printed += str[i];
    }
}