"use strict"

const employee = {
   name: "Sourabha",
   role: "Software Engineer",
   showProfile:function(){
      console.log(`Employee name: ${this.name}`);
   },

   showRole:()=>{
      console.log(`Employee role: ${this.role}`);
   }
}

employee.showProfile();//Employee name: Sourabha
employee.showRole();//Employee role: undefined