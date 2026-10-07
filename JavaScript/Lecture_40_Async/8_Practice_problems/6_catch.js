Promise.resolve(5)
    .then((value) => {
        console.log(value);
        return value * 2;
    })
    .then((value) => {
        console.log(value);
        throw new Error("Something went wrong");
    })
    .then((value) => {
        console.log("Success", value);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });