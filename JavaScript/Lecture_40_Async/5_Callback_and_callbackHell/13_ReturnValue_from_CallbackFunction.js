function calculation(a,b,callback_func){
   const result = callback_func(a,b);
   return result;

}

const return_value = calculation(4,6,(a,b)=>a+b)
console.log(return_value);