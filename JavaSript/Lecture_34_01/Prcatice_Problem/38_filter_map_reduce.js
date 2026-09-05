let students = [
    { name: "Amit", marks: 45 },
    { name: "Rahul", marks: 75 },
    { name: "Sourabha", marks: 85 },
    { name: "Raj", marks: 55 },
    { name: "Priya", marks: 90 }
];

// Find the average marks of students who scored 60 or more.

let res1 = students.filter(value=>{
        return value.marks>= 60;
});

let res2 =  res1.map(value=>{
        return value.marks;
});

let res3 = res2.reduce((total,value)=>{
        return total + value;
},0);

console.log("average: ",(res3/res2.length).toFixed(2));

 