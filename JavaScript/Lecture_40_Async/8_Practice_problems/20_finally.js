Promise.reject("Error")
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Cleanup");
    });