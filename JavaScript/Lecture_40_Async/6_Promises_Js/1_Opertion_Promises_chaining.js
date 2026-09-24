function searchItem() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("1_Search new Items...");
         resolve();
      }, 2000)
   })
}

function addToCart() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("2_Add item in Cart.");
         resolve();
      }, 1000)
   })
}

function makePayment() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("3_payment process...");
         resolve();
      }, 3000)
   })
}

function successFul() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("4_Order is Conform");
         resolve();
      }, 1000)
   })

}

function main() {

   //promise Chaining
   
   searchItem().then(()=>{
       console.log("Item Selected");
        addToCart().then(()=>{
            console.log("Ready to Shop");
            makePayment().then(()=>{
               console.log("Payment Done!❤️");
               successFul().then(()=>{
                  console.log("successful✅");
               });
            });
        });
   });


console.log("Main function");






   // searchItem(()=>{
   //    addToCart(()=>{
   //       makePayment(()=>{
   //          successFul(()=>{
   //             console.log("Done!");
   //          });
   //       });
   //    });
   // });
}

main();