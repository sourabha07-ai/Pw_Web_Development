let student = {
    name: "Sourabha Jena",
    age:23,
    address:{
        village:"Khuranta",
        post:"Kunjakothi",
        block:"Erasma",
        distict:"Jagtsighpur",
        state:"Odisha"
    },
    education:["+2 Science","+3 Physics","MCA","Intern"],
    birth_day:"2-9-2002",
    alive:function(){
        return ("yes - alive");
    },
    // gender:"Male"

};

let {address, gender = "female",...rest} = student;
console.log(gender);