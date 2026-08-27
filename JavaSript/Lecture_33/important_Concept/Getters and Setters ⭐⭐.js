// Getter ⭐⭐

//  class Student {


//     constructor(name) {
//         this.name = name;
//     }

//     get studentName() {
//         return this.name;
//     }
// }

// let s1 = new Student("Sourabha");

// console.log(s1.studentName);




// Setter ⭐⭐

// class Student {

//     constructor(name) {
//         this.name = name;
//     }

//     get studentName() {
//         return this.name;
//     }

//     set studentName(newName) {
//         this.name = newName;
//     }
// }

// let s1 = new Student("Sourabha");

// console.log(s1.studentName);

// s1.studentName = "Rahul";

// console.log(s1.studentName);



class Student {

    constructor(age) {
        this.age = age;
    }

    set studentAge(age) {
        if (age < 0) {
            console.log("Invalid age");
            return;
        }

        this.age = age;
    }
}

let s1 = new Student(23);

s1.studentAge = -10;











