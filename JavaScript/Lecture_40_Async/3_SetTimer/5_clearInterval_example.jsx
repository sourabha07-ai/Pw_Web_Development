let count = 1;

const intervalId = setInterval(() => {
    console.log(count);
    count++;
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 5000);