let arr = [12,34,56,78,90,45];

//! splice()
// arr.splice(3,1);//delete
// arr.splice(2,0,20); add
// arr.splice(3,1,[ `replace:${arr[3]}`]); //replace

//! slice()
// let mutable_arr = arr.slice(1,3);
// console.log(mutable_arr);

//! find(()=>{})
    // let result = arr.find((value) =>{
    //           return value === 78;
    // });
    // console.log(result);

//!flat()
// let arr_flat = [1,2,[3,4,[5,6,7,[8,9,10,[11,12,[13,14,15]]]]]];
// console.log(...arr_flat.flat(Infinity));

console.log(...arr);

