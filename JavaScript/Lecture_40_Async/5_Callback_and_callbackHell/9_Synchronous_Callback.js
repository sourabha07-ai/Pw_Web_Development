function processUser(name,callback){
   console.log("Hello",name);
   callback(name);
   console.log("Tata...",name);
}

processUser("Sourabha Bhai",(name)=>{
     console.log("Name from processUser:",name);
})