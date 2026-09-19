let str = "madam";
// let res = str.split("").reverse().join("");
// if (str === res) {
//   console.log("This is Palindrome");
// } else {
//   console.log("Not Pallindrome");
// }


let result = "";

for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
};

if(str === result){
        console.log("Palindrome");
}else{
        console.log("Not Palindrome");
}

