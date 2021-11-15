// @ts-check
import React, { useState } from "react";
import { Row } from "react-bootstrap";

import Left from "./Left";
import Right from "./Right";

/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */

/**
 * Calculator screen. It is divided into a left and right part, where the left part is the input form and the right part presents the result. If the screen width is less than 768px the left part becomes top and the right part becomes the bottom.
 */
function Calculator() {
  /**
   * @type {AzureResource}
   */
  const initialAzureResource = {
    projectName: "",
    componentName: "",
    environment: "dev",
    resourceType: "",
  };

  const [azureResource, setAzureResource] = useState(initialAzureResource);

  return (
    <Row className="h-100">
      <Left input={azureResource} onChange={setAzureResource} />
      <Right azureResource={azureResource} />
    </Row>
  );
}

export default Calculator;
