const add = (a,b)=> a+b;
const sub = (a,b)=> a-b;
const mul = (a,b)=> a*b;
const div = (a,b)=> a/b;

function calculation(a,b,operation){
   return operation(a,b);
}
console.log("Addition:",calculation(2,4,add));  
console.log("Substraction:",calculation(2,4,sub));  
console.log("Multiplication:",calculation(2,4,mul));  
console.log("Division:",calculation(6,4,div));  