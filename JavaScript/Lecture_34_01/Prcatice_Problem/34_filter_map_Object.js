let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

// Task: Find the names of products whose price is greater than ₹2000.

// ["Laptop", "Monitor"];

let res1 = products.filter(value =>{
        return value.price > 2000;
});

// console.log(res1);

let res2 = res1.map(value =>{
        return value.name;
});

console.log(res2);

