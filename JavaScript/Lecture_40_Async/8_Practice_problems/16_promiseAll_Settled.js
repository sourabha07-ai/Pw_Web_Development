const p1 = Promise.resolve("A");

const p2 = Promise.reject("B");

const p3 = Promise.resolve("C");

Promise.allSettled([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });