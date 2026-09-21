// "use strict"

const Person1 = {
   name: "Sourabha Jena",
   age: 23,
   email: "sourabhajena@gamil.com",
   greet() {
      console.log(`Hello ${this.name}`);

   }
}

Person1.greet(); //Sourabha Jena

const Person2 = {
   name: "Sujit Rout",
   age: 26,
   email: "rout@getPrismaClient.com"
}

Person1.greet.call(Person2);//Sujit Rout


