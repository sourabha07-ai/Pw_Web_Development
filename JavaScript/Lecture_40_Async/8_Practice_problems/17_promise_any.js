const p1 = Promise.reject("A");

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("B"), 2000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("C"), 1000);
});

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });