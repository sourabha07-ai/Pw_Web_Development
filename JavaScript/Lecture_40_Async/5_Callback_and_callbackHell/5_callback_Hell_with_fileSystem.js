const fs = require("node:fs");

fs.readFile("text.txt", "utf8", (error, data) => {
    if (error) {
        console.log("Error:", error.message);
        return;
    }

    console.log(data);
});