function searchPizza(callback){
   console.log("Pizza is Searching...");
   setTimeout(function(){
      console.log("Here is Pizza menu...");
       let price = 500;
      callback(price);
   },3000)
      
}
 searchPizza(function(price){
    console.log("Pizza Price:",price);
 });
 