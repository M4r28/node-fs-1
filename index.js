const fs = require("fs");

const displayJSON = fs.readFileSync("./package.json", "utf8");
console.log(displayJSON);
