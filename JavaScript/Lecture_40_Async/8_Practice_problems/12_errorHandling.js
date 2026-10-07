function getData() {
    return Promise.reject("Failed!");
}

async function test() {
    try {
        const result = await getData();
        console.log("Success:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

test();

console.log("Done");