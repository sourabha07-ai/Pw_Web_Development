const students = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Sourabha" }
];

const student = students.find(student => student.id === 3);

console.log(student);