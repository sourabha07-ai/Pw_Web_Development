 
function searchItem() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("1_Search new Items...");

         resolve();
         // reject(new Error("404 Server Down 🐌"));
      }, 2000);
   });
}

function addToCart() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("2_Add item in Cart.");

         // resolve();
         reject(new Error("Server is Slow 🦥"));
      }, 1000);
   });
}

function makePayment() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("3_Payment process...");

         // resolve();
         reject(new Error("Payment Not produced.❌"));
      }, 3000);
   });
}

function successFul() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("4_Order is Confirm");

         // resolve()
         reject(new Error("Rejected❌"));
      }, 1000);
   });
}

function main() {
   return searchItem()
      .catch((err) => {
         console.log("Search Error:", err.message);
      })
      .then(() => addToCart())
      .catch((err) => {
         console.log("Cart Error:", err.message);
      })
      .then(() => makePayment())
      .catch((err) => {
         console.log("Payment Error:", err.message);
      })
      .then(() => successFul())
      .catch((err) => {
         console.log("Order Error:", err.message);
      });
}

main()
   .then(() => {
      console.log("Process Completed ✅");
   })
   .catch((err) => {
      console.log("Main Error:", err.message);
   });