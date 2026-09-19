let array = [10,20,30,40,50];

let copy_array = [...array];

copy_array.pop();

console.log(`Original array: `,array);
console.log(`Copy array: `,copy_array);