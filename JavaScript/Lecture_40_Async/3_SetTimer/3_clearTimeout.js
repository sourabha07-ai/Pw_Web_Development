const timerId = setTimeout(() => {
    console.log("This message will not appear");
}, 5000);

console.log("Timer started");

clearTimeout(timerId);

console.log("Timer canceled");