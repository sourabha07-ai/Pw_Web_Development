Promise.resolve(10)
    .then((value) => {
        console.log(value);
        return value + 5;
    })
    .then((value) => {
        console.log(value);
        return value * 2;
    })
    .then((value) => {
        console.log(value);
    });