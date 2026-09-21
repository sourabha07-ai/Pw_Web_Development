
"use strict"

const Users = {
   user_name:"Sourabha Jena",
   age:23,
   city:"Bhubaneswar",
   greet:function(){
      const sayName = ()=>{
         console.log(this.user_name);
      }
      sayName();
   }
}
Users.greet();