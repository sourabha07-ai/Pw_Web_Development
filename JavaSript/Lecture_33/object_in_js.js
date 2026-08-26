
let student = {
    name: "Sourabha",
    age: 23,
    course: "MCA"
};

console.log(student);


//? Access object values
console.log(student.name);
console.log(student.age);
//* Using bracket notation:
console.log(student["name"]);
console.log(student["age"]);


//? Add a new property
student.city = "Odisha";
console.log(student);

//?Change a property
student.age = 24;
console.log(student);

// ?Delete a property
delete student.age;
console.log(student);



































































































































