const p1 = Promise.resolve("A");

const p2 = Promise.reject("B");

const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });