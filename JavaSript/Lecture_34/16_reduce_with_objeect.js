let arr = [12,23,56,78,43,56];

const totalMark = arr.reduce((accumulator,currentValue)=>{
    accumulator = accumulator + currentValue;
    return accumulator;

},0);

console.log(totalMark);