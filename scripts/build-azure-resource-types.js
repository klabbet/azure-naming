/**
 * React CSV from ../azure-resource-types.csv and output to ../azure-resource-types.js
 */

const fs = require("fs");
const parse = require("csv-parse");

const input = "./src/azure-resource-types.csv";
const output = "./src/azure-resource-types.json";

// read input
fs.readFile(input, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  // parse csv
  parse(data, { from: 2, delimiter: ";" }, (err, data) => {
    if (err) {
      throw err;
    }

    // write to output
    fs.writeFile(output, JSON.stringify(data), (err) => {
      if (err) {
        throw err;
      }
    });
  });
});
