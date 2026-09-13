function first_function(callback) {
        setTimeout(() => {
                console.log("Hello from First_Function");
                callback();
        }, 2000)
        

}
function second_function(callback) {
        setTimeout(() => {
                console.log("Hello from Second_function");
                callback();
        }, 1000)
}

function third_function(callback) {
        setTimeout(() => {
                console.log("Hello form third_function");
                callback();
        }, 1000)
}

function fourth_function(callback) {
        setTimeout(() => {
                console.log("Hello form fourth_function");
                callback();
        }, 2000)

}

function main() {
        first_function(()=>{
                second_function(()=>{
                      third_function(()=>{
                          fourth_function(()=>{
                                console.log("Done ✅");
                          });
                      });
                });
        });
        console.log("Main function...");
}

main();
