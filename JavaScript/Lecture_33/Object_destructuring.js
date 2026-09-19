

let user = {
    name: "Sourabha",
    age: 23,
    geeting:function(){
         return `Wellcome back ${user.name}`  
    }
};

let { name, age,geeting } = user;
console.log(name);
console.log(age);
console.log(geeting());
