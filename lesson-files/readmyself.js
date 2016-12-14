var fs = require("fs");

var fileContents = fs.readFileSync("strings.js", "utf-8");

console.log(fileContents);
