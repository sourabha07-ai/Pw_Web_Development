// let user = {
//     name: "Sourabha",
//     age: 23
// };

// let jsonData = JSON.stringify(user);

// console.log(jsonData);
// console.log(typeof jsonData);




let jsonData = '{"name":"Sourabha","age":23}';

let user = JSON.parse(jsonData);

console.log(user.name);
console.log(user.age);
console.log(typeof user);




