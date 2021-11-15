"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("./index");
var transformer_1 = require("../../lib/transformer");
var validator_1 = require("../../lib/validator");
var azureResourceTypes_1 = require("../../lib/azureResourceTypes");
var CopyButton_1 = require("../../components/CopyButton");
/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */
/**
 * Transform the azure resource into a resource name
 * @param {object} params
 * @param {AzureResource} params.azureResource - The Azure resource to format into a resouce name
 */
function ResourceName(_a) {
    var _b;
    var azureResource = _a.azureResource;
    var projectName = azureResource.projectName, componentName = azureResource.componentName, resourceType = azureResource.resourceType, environment = azureResource.environment;
    // try to transform the input to a resource name
    var resourceName = "";
    if (projectName) {
        resourceName = (0, transformer_1["default"])((_b = (0, azureResourceTypes_1.findTransformerName)(resourceType)) !== null && _b !== void 0 ? _b : "alphanumericsHyphens", projectName + " " + componentName + " " + environment + " " + resourceType);
    }
    // if there is a resource name, validate it
    var validationResult = true;
    if (resourceName && resourceType) {
        validationResult = (0, validator_1["default"])(resourceName, resourceType);
    }
    var isActive = resourceName && resourceName !== "";
    var inactiveClassname = isActive ? "" : "font-serif fst-italic text-muted";
    var activeBorder = isActive ? "border-success border-2" : "";
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "border w-100 px-3 d-flex justify-content-between " + activeBorder + " " + inactiveClassname, style: { lineHeight: "3rem" } },
            react_1["default"].createElement("span", { style: { overflowWrap: "break-word" }, "data-testid": "resource-name-span" }, resourceName || "Enter details to the left"),
            react_1["default"].createElement(CopyButton_1["default"], { resourceName: resourceName, validationResult: validationResult })),
        validationResult !== true && (react_1["default"].createElement("span", { className: "font-regular fst-normal text-danger", "data-testid": "validation-message-span" }, validationResult.message))));
}
ResourceName.propTypes = {
    azureResource: index_1.AzureResourcePropType
};
exports["default"] = ResourceName;
