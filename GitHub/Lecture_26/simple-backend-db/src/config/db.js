// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("MongoDB Connected");
//     } catch (error) {
//         console.error("MongoDB Connection Failed");
//         process.exit(1);
//     }
// };

// module.exports = connectDB;



const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");
        console.log("Database:", mongoose.connection.name);
    } catch (error) {
        console.error("MongoDB Connection Failed");
        console.error(error.message);

        process.exit(1);
    }
};

module.exports = connectDB;