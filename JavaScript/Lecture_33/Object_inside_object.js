let student = {
    name: "Sourabha!",
    age:23,
    marks:{
         Mathematics:89,
         English:88,
         Science:98
    },
    greet:function(){
        console.log(`Welcome back ${this.name}`);
    }

}
student.greet();
console.log(student.marks);
console.log(student.marks.Mathematics);
console.log(student.marks.English);
console.log(student.marks.Science);
