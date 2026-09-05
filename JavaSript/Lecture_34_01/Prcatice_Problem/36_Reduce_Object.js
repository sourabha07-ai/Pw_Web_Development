let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

// Find the total price of all products.

let res = products.reduce((total,value) =>{
            return total + value.price;
},0);

console.log(res);