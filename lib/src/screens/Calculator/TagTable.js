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
    return (<react_bootstrap_1.Table bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Project</th>
          <td>{projectName}</td>
        </tr>
        <tr>
          <th>Component</th>
          <td>{componentName}</td>
        </tr>
        <tr>
          <th>Environment</th>
          <td>{(0, environments_1.findEnvironmentName)(environment)}</td>
        </tr>
      </tbody>
    </react_bootstrap_1.Table>);
}
TagTable.propTypes = {
    azureResource: index_1.AzureResourcePropType
};
exports["default"] = TagTable;
