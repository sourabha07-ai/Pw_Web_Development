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

   searchItem()
       .then(addToCart)
       .then(makePayment)
       .then(successFul);
       
console.log("Main function");

}

main();