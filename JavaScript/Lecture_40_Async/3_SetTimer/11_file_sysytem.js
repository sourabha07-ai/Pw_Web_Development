// import fs from "node:fs";
const fs = require('node:fs');

console.log("Start");

fs.readFile("./data.txt", "utf8", (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
});

console.log("End");
