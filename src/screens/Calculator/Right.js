import React from "react";

import { Col } from "react-bootstrap";

import { AzureResourceDefaultProps, AzureResourcePropType } from "./props";
import ResourceName from "./ResourceName";
import ResourceGroup from "./ResourceGroup";
import TagTable from "./TagTable";

/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */

/**
 * The right part of the calculator presents the result from the calculation.
 *
 * @component
 * @param {object} params
 * @param {AzureResource} params.azureResource - The Azure resource to be calculated.
 */
function Right({ azureResource }) {
  return (
    <Col lg className="position-relative">
      <div className="d-flex flex-column justify-content-center align-items-center h-100 py-4">
        <div className="w-75 mb-4">
          <h2 className="text-uppercase text-center text-muted">
            Computed Name
          </h2>
          <ResourceName azureResource={azureResource} />
        </div>
        <div className="w-75">
          <h2 className="text-uppercase text-center text-muted">
            Resource Group
          </h2>
          <ResourceGroup azureResource={azureResource} />
        </div>
        <div className="w-75">
          <h2 className="text-uppercase text-center text-muted">
            Resource Tags
          </h2>
          <TagTable azureResource={azureResource} />
        </div>
      </div>
      <div className="position-absolute w-100 bottom-0 text-center">
        <span>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="https://www.klabbet.com">Klabbet</a>
        </span>
      </div>
    </Col>
  );
}

Right.propTypes = {
  azureResource: AzureResourcePropType,
};

Right.defaultProps = {
  azureResource: AzureResourceDefaultProps,
};

export default Right;
