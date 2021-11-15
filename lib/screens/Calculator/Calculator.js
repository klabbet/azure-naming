"use strict";
exports.__esModule = true;
// @ts-check
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Left_1 = require("./Left");
var Right_1 = require("./Right");
/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */
/**
 * Calculator screen. It is divided into a left and right part, where the left part is the input form and the right part presents the result. If the screen width is less than 768px the left part becomes top and the right part becomes the bottom.
 */
function Calculator() {
    /**
     * @type {AzureResource}
     */
    var initialAzureResource = {
        projectName: "",
        componentName: "",
        environment: "dev",
        resourceType: ""
    };
    var _a = (0, react_1.useState)(initialAzureResource), azureResource = _a[0], setAzureResource = _a[1];
    return (react_1["default"].createElement(react_bootstrap_1.Row, { className: "h-100" },
        react_1["default"].createElement(Left_1["default"], { input: azureResource, onChange: setAzureResource }),
        react_1["default"].createElement(Right_1["default"], { azureResource: azureResource })));
}
exports["default"] = Calculator;
