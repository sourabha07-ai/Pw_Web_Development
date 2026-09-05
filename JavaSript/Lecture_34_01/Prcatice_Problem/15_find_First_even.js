let numbers = [1, 3, 7, 8, 10, 12];

let result = numbers.find(value =>{
        if(value% 2 == 0){
            return value;
        } 
});

console.log(result);