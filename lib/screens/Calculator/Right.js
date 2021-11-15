"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("./index");
/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */
/**
 * The right part of the calculator presents the result from the calculation.
 *
 * @component
 * @param {object} params
 * @param {AzureResource} params.azureResource - The Azure resource to be calculated.
 */
function Right(_a) {
    var azureResource = _a.azureResource;
    return (react_1["default"].createElement(Col, { lg: true },
        react_1["default"].createElement("div", { className: "d-flex flex-column justify-content-center align-items-center h-100 py-4" },
            react_1["default"].createElement("div", { className: "w-75 mb-4" },
                react_1["default"].createElement("h2", { className: "text-uppercase text-center text-muted" }, "Computed Name"),
                react_1["default"].createElement(ResourceName, { azureResource: azureResource })),
            react_1["default"].createElement("div", { className: "w-75" },
                react_1["default"].createElement("h2", { className: "text-uppercase text-center text-muted" }, "Resource Group"),
                react_1["default"].createElement(ResourceGroup, { azureResource: azureResource })),
            react_1["default"].createElement("div", { className: "w-75" },
                react_1["default"].createElement("h2", { className: "text-uppercase text-center text-muted" }, "Resource Tags"),
                react_1["default"].createElement(TagTable, { azureResource: azureResource })))));
}
Right.propTypes = {
    azureResource: index_1.AzureResourcePropType
};
exports["default"] = Right;
