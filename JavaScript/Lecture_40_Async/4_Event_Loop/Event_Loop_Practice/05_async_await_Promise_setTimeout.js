console.log("A");

async function test() {
    console.log("B");

    await Promise.resolve();

    console.log("C");

    setTimeout(() => {
        console.log("D");
    }, 0);
}

test();

Promise.resolve().then(() => {
    console.log("E");
});

console.log("F");