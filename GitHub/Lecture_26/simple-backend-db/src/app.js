const express = require("express");
const cors = require("cors");

const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL
    })
);

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Backend API is running"
    });
});

module.exports = app;