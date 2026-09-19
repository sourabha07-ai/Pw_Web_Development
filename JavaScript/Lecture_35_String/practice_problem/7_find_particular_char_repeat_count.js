let str = "banana";
let target = "a";
let count = 0;

for(let i = 0; i < str.length;i++){
        if(str[i] === target){
                count++;
        }
}
console.log(count);