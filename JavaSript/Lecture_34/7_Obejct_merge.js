let student_name = {
    name:"Sourabha",
    last_name:"Jena",
    age:23
};

let student_address = {
    village :"Khuranta",
    pin:754139,
    State:"Odisha"
};

let Student = {...student_name,...student_address};
console.log(Student);