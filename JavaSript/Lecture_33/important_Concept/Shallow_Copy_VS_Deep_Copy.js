//? 1. Shallow Copy vs Deep Copy ⭐⭐⭐

//! Shallow Copy
// let user1 = {
//     name: "Sourabha",
//     address: {
//         city: "Bhubaneswar"
//     }
// };

// let user2 = { ...user1 };

// user2.name = "Rahul";

// console.log(user1.name); // Sourabha
// console.log(user2.name); // Rahul

// user2.address.city = "Cuttack";

// console.log(user1.address.city);

// console.log(user1);
// console.log(user2);


//! Deep Copy 
let user1 = {
    name: "Sourabha",
    address: {
        city: "Bhubaneswar"
    }
};

let user2 = structuredClone(user1);

user2.address.city = "Cuttack";

console.log(user1.address.city); // Bhubaneswar
console.log(user2.address.city); // Cuttack





