function searchPizza(callback_1){
   console.log("Pizza is Searching...");
   setTimeout(function(){
      console.log("Here is Pizza Menu...");
      let price = 500;
      callback_1(price);
   },2000);
};

function addToCart(callback_2){
   console.log(`Pizza adding to Cart....`);
   setTimeout(function(){
      console.log("Pizza added in Cart.");
      callback_2();
   },3000);
};

function payment(price,callback_3){
   console.log(`Payment initiated, amount:${price}`);
   setTimeout(function(){
      console.log(`Payment is Complete,Amount ${price}`);
      callback_3();
   },5000)
}


searchPizza(function(price){
    addToCart(function(){
      payment(price,function(){
         console.log("Done!✅");
      })
    })
    


})