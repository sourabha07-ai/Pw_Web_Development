let students = [
    { name: "Amit", marks: 45 },
    { name: "Rahul", marks: 75 },
    { name: "Sourabha", marks: 85 },
    { name: "Raj", marks: 55 }
];

// Find the average marks of students who scored 60 or more.

let res1 = students.filter(value =>{
        return value.marks >= 60;
});

// console.log(res1);

let res2 = res1.map(value =>{
        return value.marks;
});

// console.log(res2);

let res3 = res2.reduce((sum,value) =>{
        return (sum + value);
},0);

console.log(res3/res2.length);