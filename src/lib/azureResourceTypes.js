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

import azureResourceTypes from "./azure-resource-types.json";
azureResourceTypes.sort((resource1, resource2) => {
  if (resource1[0] < resource2[0]) {
    return -1;
  } else if (resource1[0] > resource2[0]) {
    return 1;
  } else {
    return 0;
  }
});

function getAzureResourceTypes() {
  return azureResourceTypes.map(
    ([type, ns, abbr, transformer, ...validations]) => ({
      type,
      ns,
      abbr,
      transformer,
      validations,
    })
  );
}

/**
 * Find the transformation for the given resource type.
 * @param {string} abbr - The abbreviation of the resource type.
 * @returns {string} The transformation for the given resource type.
 */
export function findTransformerName(abbr) {
  const azureResourceTypes = getAzureResourceTypes();
  const resource = azureResourceTypes.find(
    (resource) => resource.abbr === abbr
  );
  return resource ? resource.transformer : null;
}

/**
 * Find the validations for the given resource type.
 * @param {string} abbr - The abbreviation of the resource type.
 * @returns {string[]} The validations for the given resource type.
 */
export function findValidations(abbr) {
  const azureResourceTypes = getAzureResourceTypes();
  const resource = azureResourceTypes.find(
    (resource) => resource.abbr === abbr
  );
  return resource ? resource.validations : null;
}

export default getAzureResourceTypes;
