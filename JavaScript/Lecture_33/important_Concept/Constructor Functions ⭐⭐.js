// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let student1 = new Student("Sourabha", 23);
// let student2 = new Student("Rahul", 21);

// console.log(student1);
// console.log(student2);


//? method 2

function Student(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
        console.log("My name is " + this.name);
    };
}

let s1 = new Student("Sourabha", 23);

s1.introduce();
