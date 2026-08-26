let student = {
    name: "Sourabha!",
    age:23,
    greet:function(){
        console.log(`Welcome back ${this.name}`);
    }
}
console.log(student.name);
student.greet();