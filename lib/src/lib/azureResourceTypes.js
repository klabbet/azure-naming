"use strict";
/**
 * The source for these abbreviations is here.
 * https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations
 *
 * The validation rules for each resource type is here.
 * https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules
 *
 * Copy the tables into Excel. Clean up the unwanted rows.
 * Save the table as csv and clean the abbreviation column from unwanted dashes.
 * Add transformation and validations accordingly.
 *
 */
exports.__esModule = true;
exports.findValidations = exports.findTransformerName = void 0;
var azure_resource_types_json_1 = require("./azure-resource-types.json");
azure_resource_types_json_1["default"].sort(function (resource1, resource2) {
    if (resource1[0] < resource2[0]) {
        return -1;
    }
    else if (resource1[0] > resource2[0]) {
        return 1;
    }
    else {
        return 0;
    }
});
function getAzureResourceTypes() {
    return azure_resource_types_json_1["default"].map(function (_a) {
        var type = _a[0], ns = _a[1], abbr = _a[2], transformer = _a[3], validations = _a.slice(4);
        return ({
            type: type,
            ns: ns,
            abbr: abbr,
            transformer: transformer,
            validations: validations
        });
    });
}
/**
 * Find the transformation for the given resource type.
 * @param {string} abbr - The abbreviation of the resource type.
 * @returns {string} The transformation for the given resource type.
 */
function findTransformerName(abbr) {
    var azureResourceTypes = getAzureResourceTypes();
    var resource = azureResourceTypes.find(function (resource) { return resource.abbr === abbr; });
    return resource ? resource.transformer : null;
}
exports.findTransformerName = findTransformerName;
/**
 * Find the validations for the given resource type.
 * @param {string} abbr - The abbreviation of the resource type.
 * @returns {string[]} The validations for the given resource type.
 */
function findValidations(abbr) {
    var azureResourceTypes = getAzureResourceTypes();
    var resource = azureResourceTypes.find(function (resource) { return resource.abbr === abbr; });
    return resource ? resource.validations : null;
}
exports.findValidations = findValidations;
exports["default"] = getAzureResourceTypes;
