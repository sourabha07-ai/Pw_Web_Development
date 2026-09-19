let numbers = [2,4,6,7,3,5,1];

let result = numbers.filter(value =>{
     if(value % 2 == 0){
        return value;
     }
});

console.log(result);