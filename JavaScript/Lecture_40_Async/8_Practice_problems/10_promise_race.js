const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("A"), 3000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("B"), 1000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("C"), 2000);
});

Promise.race([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });