function getUser(callback) {
  const user = { id: 1, name: "Sourabha" };
  callback(null, user);
}

getUser((error, user) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(user.name);
});