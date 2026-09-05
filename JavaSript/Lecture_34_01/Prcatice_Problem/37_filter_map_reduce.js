let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

// Find the total price of products whose price is greater than 2000.

let res1 = products.filter(value=>{
        return value.price > 2000;
});

let res2 = res1.map(value =>{
        return value.price;
});

let res3 = res2.reduce((total,value)=>{
        return total + value;
},0);

console.log(res3);