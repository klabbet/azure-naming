// @ts-check
import React from "react";
import { Table } from "react-bootstrap";
import transformer from "../../lib/transformer";
import { AzureResourceDefaultProps, AzureResourcePropType } from "./props";

/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */

/**
 * Transform the azure resource to a resource group name
 * @param {object} props
 * @param {AzureResource} props.azureResource - Azure resource
 */
function ResourceGroup({ azureResource }) {
  const { projectName, componentName, environment } = azureResource;

  // transform the appropriate name for the resource group
  let resourceGroup = "\u00A0"; // none breaking space
  if (projectName) {
    resourceGroup = transformer(
      `${projectName} ${componentName} ${environment} rg`,
      "alphanumericsHyphens",
    );
  }
  return (
    <Table>
      <thead>
        <tr>
          <th>Resource Group Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-testid="resource-group-td">{resourceGroup}</td>
        </tr>
      </tbody>
    </Table>
  );
}

ResourceGroup.propTypes = {
  azureResource: AzureResourcePropType,
};

ResourceGroup.defaultProps = {
  azureResource: AzureResourceDefaultProps,
};

export default ResourceGroup;
