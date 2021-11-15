"use strict";
exports.__esModule = true;
// @ts-check
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var index_1 = require("./index");
var environments_1 = require("../../lib/environments");
/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */
/**
 *
 * @param {object} props
 * @param {AzureResource} props.azureResource
 * @returns
 */
function TagTable(_a) {
    var azureResource = _a.azureResource;
    var projectName = azureResource.projectName, componentName = azureResource.componentName, environment = azureResource.environment;
    return (react_1["default"].createElement(react_bootstrap_1.Table, { bordered: true },
        react_1["default"].createElement("thead", null,
            react_1["default"].createElement("tr", null,
                react_1["default"].createElement("th", null, "Name"),
                react_1["default"].createElement("th", null, "Value"))),
        react_1["default"].createElement("tbody", null,
            react_1["default"].createElement("tr", null,
                react_1["default"].createElement("th", null, "Project"),
                react_1["default"].createElement("td", null, projectName)),
            react_1["default"].createElement("tr", null,
                react_1["default"].createElement("th", null, "Component"),
                react_1["default"].createElement("td", null, componentName)),
            react_1["default"].createElement("tr", null,
                react_1["default"].createElement("th", null, "Environment"),
                react_1["default"].createElement("td", null, (0, environments_1.findEnvironmentName)(environment))))));
}
TagTable.propTypes = {
    azureResource: index_1.AzureResourcePropType
};
exports["default"] = TagTable;
