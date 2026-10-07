Promise.resolve("Success")
    .then((value) => {
        console.log(value);
    })
    .finally(() => {
        console.log("Finally");
    });