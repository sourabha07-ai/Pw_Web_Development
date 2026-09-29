const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200
        ? 500
        : res.statusCode;

    let message = err.message;

    let errors = undefined;

    // Mongoose validation error
    if (err.name === "ValidationError") {
        statusCode = 400;

        message = "Validation failed";

        errors = {};

        Object.keys(err.errors).forEach((field) => {
            errors[field] = err.errors[field].message;
        });
    }

    // Duplicate email
    if (err.code === 11000) {
        statusCode = 400;

        message = "Duplicate value";

        errors = {
            email: "Email is already registered"
        };
    }

    res.status(statusCode).json({
        success: false,
        message,
        ...(errors && { errors }),
        ...(process.env.NODE_ENV !== "production" && {
            stack: err.stack
        })
    });
};

module.exports = errorHandler;