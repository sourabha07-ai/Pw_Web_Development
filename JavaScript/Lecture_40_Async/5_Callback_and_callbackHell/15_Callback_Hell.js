function first_function(callback_1) {
        setTimeout(() => {
                console.log("Hello from First_Function");
                callback_1();
        },2000)
        
}
function second_function(callback_2) {
        setTimeout(() => {
                console.log("Hello from Second_function");
                callback_2();
        },1000)
}

function third_function(callback_3) {
        setTimeout(() => {
                console.log("Hello form third_function");
                callback_3();
        }, 1000)
}

function fourth_function(callback_4) {
        setTimeout(() => {
                console.log("Hello form fourth_function");
                callback_4();
        }, 3000)

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
