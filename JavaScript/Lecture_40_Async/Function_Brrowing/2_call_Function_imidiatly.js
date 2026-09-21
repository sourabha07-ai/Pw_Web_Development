function introduce(role,department){
   console.log(this.name);
   console.log(role);
   console.log(department);
}

const employees = {
   name:"Sourabha Jena"
}

//! functionName.call(object, arg1, arg2);

introduce.call(employees,"Developer","Tech_Team");