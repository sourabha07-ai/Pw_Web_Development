 const students = [
            {id: 101, name: "Sourabha", age: 23, course: "MCA", marks: 85}, 
            {id: 102, name: "Rahul", age: 22, course: "MCA", marks: 78}, 
            {id: 103, name: "Priya", age: 23, course: "MCA", marks: 92}
        ];

// console.log(students);

// console.log(students);
// console.log(students[0].name);
// console.log(students[1].name);
// console.log(students[2].name);

//console.log(students[3].name); //!error

// students.forEach(student =>{
//         console.log(student.name,student.age);
// });

const names = students.map(student => student.name);
console.log("Student Names: ",names);

const ages = students.map(student => student.age);
console.log("Student age: ",ages);

const courses = students.map(student => student.course);
// console.log(courses);