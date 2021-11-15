/**
 * React CSV from azure-resource-types.csv and output to azure-resource-types.js
 */
var fs = require("fs");
var parse = require("csv-parse");
var input = "./src/lib/azure-resource-types.csv";
var output = "./src/lib/azure-resource-types.json";
// read input
fs.readFile(input, "utf-8", function (err, data) {
    if (err) {
        throw err;
    }
    // parse csv
    parse(data, { from: 2, delimiter: ";" }, function (err, data) {
        if (err) {
            throw err;
        }
        // write to output
        fs.writeFile(output, JSON.stringify(data), function (err) {
            if (err) {
                throw err;
            }
        });
    });
});
