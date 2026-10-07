function getData(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

async function test() {
    const result = await Promise.all([
        getData("A", 3000),
        getData("B", 1000),
        getData("C", 2000)
    ]);

    console.log(result);
}

test();

console.log("Done");