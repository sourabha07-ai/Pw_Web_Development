console.log("Start");

setTimeout(() => {
   console.log("Task");
}, 0);

Promise.resolve().then(() => {
   console.log("Microtask");
});

console.log("End");