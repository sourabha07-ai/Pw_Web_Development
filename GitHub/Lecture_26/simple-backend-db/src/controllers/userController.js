const asyncHandler = require("express-async-handler");

const User = require("../models/User");

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();

    res.json(users);
});

const createUser = asyncHandler(async (req, res) => {
    const { name, email, age } = req.body;

    const user = await User.create({
        name,
        email,
        age
    });

    res.status(201).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    if (!user) {
        res.status(404);

        throw new Error("User not found");
    }

    res.json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(
        req.params.id
    );

    if (!user) {
        res.status(404);

        throw new Error("User not found");
    }

    res.json({
        success: true,
        message: "User deleted successfully"
    });
});

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};