let student = {
        name:"Sourabha Jena",
        age:24,
        course:"MCA",
        city:"Bhubaneswar"
};

// let name = student.name;
// let age = student.age;
// let course = student.course;
// let city = student.city;
// console.log(name,age,course,city);


// let { name,age,course,city } = student; //! destructure
// console.log(name);
// console.log(age);
// console.log(course);
// console.log(city);

let arr = [1,2,3,4,5,6,7];
let [a,b,c,...rest] = arr;

console.log(a);
console.log(b);
console.log(...rest);
