// let student = {
//         name:"Sourabha",
//         age:23,
//         course:"MCA"

// };

// let student2 = {
//         id:1,
//         ...student
// };
// console.log(student2);


// function sum(...numbers){
//     console.log(numbers);
// }

// sum(12,10,11,20);


function sum(...numbers){
      return numbers.reduce((total,value ) => total + value,0);  
}

console.log(sum(10,20,30,40));












