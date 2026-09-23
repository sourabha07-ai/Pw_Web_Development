function processUser(name,callback){
   console.log("Before Callback",name);
   callback(name);
   console.log("After Callback",name);
}

processUser("Sourabha Bhai",(name)=>{
   name = "Raju Bhai";
     console.log("Name from processUser:",name);
});