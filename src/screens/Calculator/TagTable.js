// @ts-check
import React from "react";
import { Table } from "react-bootstrap";
import { AzureResourcePropType, AzureResourceDefaultProps } from "./props";
import { findEnvironmentName } from "../../lib/environments";

/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */

/**
 *
 * @param {object} props
 * @param {AzureResource} props.azureResource
 * @returns
 */
function TagTable({ azureResource }) {
  const { projectName, componentName, environment } = azureResource;
  return (
    <Table bordered>
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
          <td>{findEnvironmentName(environment)}</td>
        </tr>
      </tbody>
    </Table>
  );
}

TagTable.propTypes = {
  azureResource: AzureResourcePropType,
};

TagTable.defaultProps = {
  azureResource: AzureResourceDefaultProps,
};

export default TagTable;
