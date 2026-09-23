const add = (a,b) => a+b;
const mul = (a,b) => a*b;
const sub = (a,b) => a-b;
const div = (a,b) => a/b;

function calculator(a,b,calculation){
   return calculation(a,b);
}


console.log("Addition:",calculator(32,12,add));
console.log("Substaction:",calculator(32,12,sub));
console.log("Multiplication:",calculator(32,12,mul));
console.log("Division:",calculator(32,12,div));
