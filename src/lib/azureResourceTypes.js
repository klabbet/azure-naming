// @ts-check
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

/** @typedef { import("../../@types/azure-resource-naming/lib/azureResourceTypes").AzureResourceType} AzureResourceType */

// @ts-ignore
import azureResourceTypes from "./azure-resource-types.json";

// sorting the array of resources
azureResourceTypes.sort((resource1, resource2) => {
  if (resource1[0] < resource2[0]) {
    return -1;
  }

  if (resource1[0] > resource2[0]) {
    return 1;
  }

  return 0;
});

/**
 * Read the input json and transform it into a resource type array
 * @return {AzureResourceType[]} An array of azure resource types.
 */
function getAzureResourceTypes() {
  return azureResourceTypes.map(
    ([type, ns, abbr, transformer, ...validations]) => ({
      type,
      ns,
      abbr,
      transformer,
      validations,
    }),
  );
}

/**
 * Find the transformation for the given resource type.
 * @param {string} abbr - The abbreviation of the resource type.
 * @returns {string} The transformation for the given resource type.
 */
export function findTransformerName(abbr) {
  const data = getAzureResourceTypes();
  const resource = data.find((item) => item.abbr === abbr);
  return resource ? resource.transformer : null;
}

/**
 * Find the validations for the given resource type.
 * @param {string} abbr - The abbreviation of the resource type.
 * @returns {string[]} The validations for the given resource type.
 */
export function findValidations(abbr) {
  const data = getAzureResourceTypes();
  const resource = data.find((item) => item.abbr === abbr);
  return resource ? resource.validations : null;
}

export default getAzureResourceTypes;
