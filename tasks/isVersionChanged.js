const packageInfo = require("../package.json");

console.log("adding a test change");
console.log(`::set-output name=isNewVersion::${true}`);
