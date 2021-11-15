import React from "react";
import { AzureResourceDefaultProps, AzureResourcePropType } from "./props";
import transformer from "../../lib/transformer";
import validator from "../../lib/validator";
import { findTransformerName } from "../../lib/azureResourceTypes";
import CopyButton from "../../components/CopyButton";

/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */
/** @typedef { import("../../../@types/azure-resource-naming/lib/validator").ValidationResult} ValidationResult */

/**
 * Transform the azure resource into a resource name
 * @param {object} params
 * @param {AzureResource} params.azureResource - The Azure resource to format into a resouce name
 */
function ResourceName({ azureResource }) {
  const { projectName, componentName, resourceType, environment } =
    azureResource;

  // try to transform the input to a resource name
  let resourceName = "";
  if (projectName) {
    resourceName = transformer(
      `${projectName} ${componentName} ${environment} ${resourceType}`,
      findTransformerName(resourceType) ?? "alphanumericsHyphens",
    );
  }

  // if there is a resource name, validate it
  /** @type {ValidationResult|boolean} */
  let validationResult = true;
  if (resourceName && resourceType) {
    validationResult = validator(resourceName, resourceType);
  }

  const isActive = resourceName && resourceName !== "";
  const inactiveClassname = isActive ? "" : "font-serif fst-italic text-muted";
  const activeBorder = isActive ? "border-success border-2" : "";

  return (
    <div>
      <div
        className={`border w-100 px-3 d-flex justify-content-between ${activeBorder} ${inactiveClassname}`}
        style={{ lineHeight: "3rem" }}
      >
        <span
          style={{ overflowWrap: "break-word" }}
          data-testid="resource-name-span"
        >
          {resourceName || "Enter details to the left"}
        </span>

        <CopyButton
          text="Copy"
          value={resourceName}
          isDisabled={validationResult !== true}
        />
      </div>
      {validationResult !== true && validationResult !== false && (
        <span
          className="font-regular fst-normal text-danger"
          data-testid="validation-message-span"
        >
          {validationResult.message}
        </span>
      )}
    </div>
  );
}

ResourceName.propTypes = {
  azureResource: AzureResourcePropType,
};

ResourceName.defaultProps = {
  azureResource: AzureResourceDefaultProps,
};

export default ResourceName;
