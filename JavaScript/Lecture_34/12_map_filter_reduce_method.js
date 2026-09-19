let original_array = [120,220,320,420,520];
 console.log(`Original array: `,original_array);
// console.log(original_array);

let discount_price = original_array.map(value =>{
    return value/10;
});

// console.log(discount_price);

 console.log(`Discount value:`,discount_price);
 
