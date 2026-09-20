// "use strict"

//! Common arrow function
// const myName = ()=>{
//    console.log(this);
// }
// console.log(myName);

//! Inside Object

const Student ={
   student_name:"Sourabha Jena",
   age:24,
   course:"MCA",
   greet:()=>{
      console.log(this.student_name);
   }
}
Student.greet();