let products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        name: "Phone",
        price: 25000,
        category: "Electronics"
    },
    {
        name: "Shoes",
        price: 2000,
        category: "Fashion"
    }
];

function showProducts(products) {

    for (let product of products) {

        console.log(
            product.name,
            product.price,
            product.category
        );

    }

}

showProducts(products);