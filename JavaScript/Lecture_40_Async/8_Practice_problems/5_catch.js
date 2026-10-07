Promise.reject("Error!")
    .then((value) => {
        console.log("A", value);
    })
    .catch((error) => {
        console.log("B", error);
        return "Success";
    })
    .then((value) => {
        console.log("C", value);
    });