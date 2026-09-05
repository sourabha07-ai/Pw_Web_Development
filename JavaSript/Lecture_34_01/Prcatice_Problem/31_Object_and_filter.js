let students = [
    { name: "Amit", marks: 45 },
    { name: "Rahul", marks: 75 },
    { name: "Sourabha", marks: 85 },
    { name: "Raj", marks: 55 }
];

// Find students who scored 60 or more.

let res = students.filter(value =>{
        return value.marks >= 60;
});
console.log(res);