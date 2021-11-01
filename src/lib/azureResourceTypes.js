/**
 * The source for these abbreviations is here.
 * https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations
 *
 * Copy  the tables into Excel. Clean up the unwanted rows.
 * Save the table as csv and clean the abbreviation column from unwanted dashes.
 *
 * Last update: 2021-10-14
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

export function findTransformerName(abbr) {
  const azureResourceTypes = getAzureResourceTypes();
  const resource = azureResourceTypes.find(
    (resource) => resource.abbr === abbr
  );
  return resource ? resource.transformer : null;
}

export default getAzureResourceTypes;
