let str = "aabbcde";
let n = str.length;

for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
        // Compare str[i] with str[j]
        if(str[i] == str[j]){
            count++;    
        }
    }
    // If count is 1 → this is the answer
    if(count == 1){
        console.log(str[i]);
        break;
    }
}