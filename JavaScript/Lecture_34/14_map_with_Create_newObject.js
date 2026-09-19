let students = [
    { name: "Sourabha", marks: 85 },
    { name: "Rahul", marks: 32 },
    { name: "Amit", marks: 90 }
];

let result = students.map((student)=> ({
    name: student.name,
    marks: student.marks,
    status: student.marks >= 40 ? "Pass" : "Fail"
}));

console.log(result);