class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let s1 = new Student("Sourabha", 23);

console.log(s1.name);
s1.greet();