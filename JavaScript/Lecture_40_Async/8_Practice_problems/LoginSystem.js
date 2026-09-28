function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("Login Successful");
    } else {
      reject("Login Invalid");
    }
  });
}

loginUser("admin", "1234")
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
