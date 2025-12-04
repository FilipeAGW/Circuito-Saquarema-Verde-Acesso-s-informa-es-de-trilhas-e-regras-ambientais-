const fs = require("fs");

const readData = () => {
  const data = fs.readFileSync("data.json", "utf8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
