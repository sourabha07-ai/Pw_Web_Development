const p = new Promise((resolve, reject) => {
    resolve("Success");
    reject("Error");
});

p.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});