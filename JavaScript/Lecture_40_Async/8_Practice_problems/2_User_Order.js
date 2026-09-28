function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Sourabha Jena" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: userId, product: "Keyboard", price: 1500 },
        { id: userId, product: "Mouse", price: 700 },
      ]);
    }, 1000);
  });
}

getUser(101)
  .then((user) => {
    return getOrders(user.id);
  })
  .then((orders) => {
     console.log(orders)
  })
  .catch((error) => {
    console.log("Error:", error);
  });
