/*
! Project Requirements
Create:
An employee object.
A manager object.
A shared function to display name, role, and department.
!Use call(), apply(), and bind(). 
*/

function showProfile(role,department){
   console.log(`\nName: ${this.name}`);
   console.log(`Role ${role}`);
   console.log(`Department: ${department}`);

}

const employee = {
   name: "Sourabha",
   role: "Backend Developer",
   department: "Engineering"
}

const manager = {
   name:"Rahul",
   role: "Engineering Manager",
   department: "Engineering"
}

showProfile.call(employee,"Backend Developer","Engineering");
showProfile.apply(manager,["Engineering Manager","Engineering"]);

 const showManager = showProfile.bind(manager,"Engineering Manager");
 showManager("Engineering");

