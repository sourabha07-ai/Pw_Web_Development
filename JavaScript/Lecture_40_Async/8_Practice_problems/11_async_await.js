function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data");
        }, 2000);
    });
}

async function test() {
    console.log("A");

    const result = await getData();

    console.log(result);

    console.log("B");
}

test();

console.log("C");