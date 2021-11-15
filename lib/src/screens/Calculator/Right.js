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
    return (<Col lg={true}>
      <div className="d-flex flex-column justify-content-center align-items-center h-100 py-4">
        <div className="w-75 mb-4">
          <h2 className="text-uppercase text-center text-muted">
            Computed Name
          </h2>
          <ResourceName azureResource={azureResource}/>
        </div>
        <div className="w-75">
          <h2 className="text-uppercase text-center text-muted">
            Resource Group
          </h2>
          <ResourceGroup azureResource={azureResource}/>
        </div>
        <div className="w-75">
          <h2 className="text-uppercase text-center text-muted">
            Resource Tags
          </h2>
          <TagTable azureResource={azureResource}/>
        </div>
      </div>
    </Col>);
}
Right.propTypes = {
    azureResource: index_1.AzureResourcePropType
};
exports["default"] = Right;
