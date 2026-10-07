Promise.resolve(1)
    .then((value) => {
        console.log(value);
        return Promise.resolve(value + 1);
    })
    .then((value) => {
        console.log(value);
        return value + 1;
    })
    .then((value) => {
        console.log(value);
    });