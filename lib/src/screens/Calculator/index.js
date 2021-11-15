"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Calculator = exports.AzureResourcePropType = void 0;
var prop_types_1 = require("prop-types");
exports.AzureResourcePropType = prop_types_1["default"].shape({
    projectName: prop_types_1["default"].string.isRequired,
    componentName: prop_types_1["default"].string,
    environment: prop_types_1["default"].oneOf(["dev", "test", "stage", "prod"]).isRequired,
    resourceType: prop_types_1["default"].string.isRequired
});
var Calculator_1 = require("./Calculator");
__createBinding(exports, Calculator_1, "default", "Calculator");
