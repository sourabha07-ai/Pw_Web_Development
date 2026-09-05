let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

// Find the first product whose price is greater than 10000.

let res = products.find(value =>{
        return value.price > 10000;
});
console.log(res);