// 3. Function + Array + Object ⭐⭐⭐

function print_student(student){
    for(let i = 0; i < student.length;i++){
        console.log(student[i].name);
        console.log(student[i].age);
        console.log(student[i].marks);
    }
}

let student = [
    {
        name: "Sourabha",
        age: 23,
        marks: 85
    },
    {
        name: "Rahul",
        age: 22,
        marks: 78
    },
    {
        name: "Priya",
        age: 21,
        marks: 92
    }
];

print_student(student);

