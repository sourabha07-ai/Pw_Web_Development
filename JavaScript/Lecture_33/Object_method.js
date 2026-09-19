//? Object methods

let user = {
    name: "Sourabha",
    age: 23,
    address : {
    city: "Bhubaneswar", }
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for (let key in user) {
    console.log(key, user[key]);
}

// Optional chaining
console.log(user.address?.city);