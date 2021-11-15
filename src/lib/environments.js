// @ts-check

/** @typedef { import("../../@types/azure-resource-naming/lib/environment").Environment} Environment */

/**
 * @type Environment[]
 */
const environments = [
  { abbr: "dev", name: "Development" },
  { abbr: "test", name: "Test" },
  { abbr: "stage", name: "Staging" },
  { abbr: "prod", name: "Production" },
];

/**
 * Find a development environment by its abbreviation.
 * @param {"dev"|"test"|"stage"|"prod"} abbr - Environment abbreviation.
 * @returns {string} - Empty string if not found
 */
export function findEnvironmentName(abbr) {
  const environment = environments.find((env) => env.abbr === abbr);
  return environment ? environment.name : "";
}

export default environments;
