let count  = 0;

const countdown = setInterval(()=>{
       console.log("Tick:",count++);
       const start = Date.now();

    while (Date.now() - start < 1500) {
        // Simulate a 1.5 second blocking task.
    }
},1000);

// console.log(Date.now());
 