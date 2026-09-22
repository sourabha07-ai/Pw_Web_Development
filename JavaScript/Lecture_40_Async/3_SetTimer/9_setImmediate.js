console.log("Start");

setTimeout(() => {
    console.log("Timer");
},0);

setImmediate(() => {
    console.log("Immediate");
});

console.log("End");