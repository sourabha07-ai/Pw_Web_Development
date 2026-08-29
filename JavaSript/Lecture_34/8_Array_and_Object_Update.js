const student = {
    name: "Sourabha",
    age: 23,
    course: "MCA",
    address: {
        city: "Bhubaneswar",
        state: "Odisha"
    }
};
console.log(student);
console.log(student);
student.name = "Puja";
// console.log(student);
// delete student.course; //!property delete
// console.log(student);



const college = {
    name: "GIET University",
    location: student.address,
    student: student
};

console.log(college);