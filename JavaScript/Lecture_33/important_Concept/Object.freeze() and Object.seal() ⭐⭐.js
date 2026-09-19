
//! Object.freeze();

// let user = {
//     name: "Sourabha",
//     age: 23
// };

// Object.freeze(user);

// user.age = 25;
// user.city = "Odisha";
// delete user.name;

// console.log(user);


//!  Object.seal();
// let user = {
//     name: "Sourabha",
//     age: 23
// };

// Object.seal(user);

// user.age = 25;       // ✅ upadate only
// user.city = "Odisha"; // ❌
// delete user.name;     // ❌

// console.log(user);

 let user = {
    name: "Sourabha",
    address: {
        city: "Bhubaneswar"
    }
};

Object.freeze(user);

user.address.city = "Cuttack";

console.log(user.address.city);




















