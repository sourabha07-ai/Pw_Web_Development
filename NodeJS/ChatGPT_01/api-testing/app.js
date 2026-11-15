const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" }
];

// GET all users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// GET user by ID
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json(user);
});

// POST new user
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      message: "Name is required"
    });
  }
  
  if (typeof name !== "string" || !name.trim()) {
  return res.status(400).json({
    message: "Valid name is required"
  });
}

  const newUser = {
    id: users.length + 1,
    name: name.trim()
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

module.exports = app;