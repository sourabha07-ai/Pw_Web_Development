let arr = [10, 20, 30, 40];

let sum = arr.reduce((total,value) => {return total + value},0);
console.log(sum);

//! array.reduce((accumulator, currentValue) => {
//!     // calculation
//! }, initialValue);