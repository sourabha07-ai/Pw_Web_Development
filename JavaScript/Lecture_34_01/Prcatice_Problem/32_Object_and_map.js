let students = [
    { name: "Amit", marks: 45 },
    { name: "Rahul", marks: 75 },
    { name: "Sourabha", marks: 85 },
    { name: "Raj", marks: 55 }
];

let res = students.map(value =>{
        return value.name;
})

console.log(res);