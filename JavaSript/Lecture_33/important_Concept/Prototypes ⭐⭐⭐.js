// let user = {
//     name: "Sourabha"
// };

// console.log(user.toString());


//! Constructor + Prototype

function Student(name) {
    this.name = name;
}

Student.prototype.greet = function() {
    console.log("Hello " + this.name);
};

let s1 = new Student("Sourabha");
let s2 = new Student("Rahul");

s1.greet();
s2.greet();