Promise.resolve(10)
    .then((value) => {
        console.log("A:", value);
        throw new Error("Oops");
    })
    .then((value) => {
        console.log("B:", value);
    })
    .catch((error) => {
        console.log("C:", error.message);
        return 20;
    })
    .then((value) => {
        console.log("D:", value);
    })
    .finally(() => {
        console.log("E");
    });