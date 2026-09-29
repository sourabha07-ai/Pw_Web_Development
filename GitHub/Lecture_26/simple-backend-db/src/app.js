 const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend API is running"
    });
});

app.use("/api/users", userRoutes);

//! 404
app.use(notFound);

//! Global error handler
app.use(errorHandler);

module.exports = app;