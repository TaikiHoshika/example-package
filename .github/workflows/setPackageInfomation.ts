const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
data["name"] = `@${process.argv[3]}/${process.argv[4]}`;
data["repository"]["url"] = process.argv[5];

fs.writeFileSync(process.argv[2], JSON.stringify(data), "utf8");