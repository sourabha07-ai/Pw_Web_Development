// ! functionName.apply(object, [arg1, arg2]);

function introduce(role,department,salary){
     console.log(`Employees Name: ${this.name}`);
     console.log(`age: ${this.age}`);
     console.log(`Employees Role: ${this.role}`);
     console.log(`Department: ${department}`);
     console.log(`Salary: ${salary}`);
}

const Employees = {
   name:"Sourabha jena",
   role:"Software Dev",
   age:24
}

introduce.apply(Employees,["Developer","IT"]);



