"use strict";
exports.__esModule = true;
exports.findEnvironmentName = void 0;
var environments = [
    { abbr: "dev", name: "Development" },
    { abbr: "test", name: "Test" },
    { abbr: "stage", name: "Staging" },
    { abbr: "prod", name: "Production" },
];
function findEnvironmentName(abbr) {
    var environment = environments.find(function (env) { return env.abbr === abbr; });
    return environment ? environment.name : "";
}
exports.findEnvironmentName = findEnvironmentName;
exports["default"] = environments;
