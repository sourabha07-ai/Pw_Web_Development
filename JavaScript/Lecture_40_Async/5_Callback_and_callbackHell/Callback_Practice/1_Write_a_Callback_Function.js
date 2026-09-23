function outer(callback) {
  console.log("1");
  callback();
  console.log("2");
}

outer(() => console.log("3"));