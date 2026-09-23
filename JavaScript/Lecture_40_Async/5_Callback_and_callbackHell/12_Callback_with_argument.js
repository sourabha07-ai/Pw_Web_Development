function greetUser(name,callback){
   console.log(name);
   console.log(callback(name));
   console.log(name);
}

const callback_name = (name)=>{
   name = "Raju"
   return name;
}

greetUser("Sourabha",callback_name)