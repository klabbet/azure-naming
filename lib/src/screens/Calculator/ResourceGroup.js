"use strict";
exports.__esModule = true;
// @ts-check
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var transformer_1 = require("../../lib/transformer");
var index_1 = require("./index");
/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */
/**
 * Transform the azure resource to a resource group name
 * @param {object} props
 * @param {AzureResource} props.azureResource - Azure resource
 */
function ResourceGroup(_a) {
    var azureResource = _a.azureResource;
    var projectName = azureResource.projectName, componentName = azureResource.componentName, environment = azureResource.environment;
    // transform the appropriate name for the resource group
    var resourceGroup = "";
    if (projectName) {
        resourceGroup = (0, transformer_1["default"])("alphanumericsHyphens", projectName + " " + componentName + " " + environment + " rg");
    }
    return (<react_bootstrap_1.Table>
      <thead>
        <tr>
          <th>Resource Group Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-testId="resource-group-td">{resourceGroup}</td>
        </tr>
      </tbody>
    </react_bootstrap_1.Table>);
}
ResourceGroup.propTypes = {
    azureResource: index_1.AzureResourcePropType.isRequired
};
exports["default"] = ResourceGroup;
