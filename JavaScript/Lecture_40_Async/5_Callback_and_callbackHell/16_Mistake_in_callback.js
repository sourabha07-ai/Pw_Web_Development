
// !Mistake 1
// function run(callback) {
//   callback();
// }

// run(console.log("Hello"));

//! Mistake 2

// function run(callback) {
//   if (typeof callback === "function") {
//     callback();
//   }
// }

//? not mistake 3


function outer(callback) {
  console.log("1");
  callback();
  console.log("2");
}

outer(() => console.log("3"));