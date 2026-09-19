// 4. for...of + Array + Object ⭐⭐⭐
function print_student(student){
    for(let std of student){
        console.log(std.name);
        console.log(std.age);
        console.log(std.marks);
    }
}
let student = [
    {
        name: "Sourabha",
        age: 23,
        marks: 85
    },
    {
        name: "Puja",
        age: 22,
        marks: 78
    },
    {
        name: "Swpana",
        age: 21,
        marks: 92
    }
];

print_student(student);