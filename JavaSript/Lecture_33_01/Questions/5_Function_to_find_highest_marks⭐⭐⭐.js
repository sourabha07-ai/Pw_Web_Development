// 5. Function to find highest marks ⭐⭐⭐
function findTopper(students) {

    let topper = students[0];

    for (let i = 1; i < students.length; i++) {

        if (students[i].marks > topper.marks) {
            topper = students[i];
        }

    }

    return topper;
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

let result = findTopper(student);

console.log(result);