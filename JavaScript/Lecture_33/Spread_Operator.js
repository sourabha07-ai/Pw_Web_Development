// let arr = [1,2,3,4,5,6,7];
//? in array 
// let arr2 = [...arr,8,9,10];
// console.log(arr2);

// let arr3 = [...arr,...arr2];
// console.log(arr3);


//? in Object 
// let user = {
//     name: "Sourabha",
//     age: 23
// };

// let user2 = {...user};
// console.log(user2);

//? Combine Object 

// let address = {
//     city: "Bhubaneswar",
//     state: "Odisha"
// };

// let person = {...user,...address};
// console.log(person);

//! Update object using spread ⭐⭐⭐

let user = {
    name: "Sourabha",
    age: 23
};

let UpdateAge ={...user,age:34};
// console.log(UpdateAge);

//! important 
let arr = [10, 20, 30, 40, 50];

let [a, b, ...rest] = arr;

console.log(a);
console.log(b);
console.log(rest);