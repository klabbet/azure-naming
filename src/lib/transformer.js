import characterReplacement from "./characterReplacement";

/**
 * Allow alphanumerics.
 * @param {string} str
 * @returns {string} A string with all non-alphanumeric characters removed.
 */
function alphanumerics(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

/**
 * Two dashes in row is one too much.
 * @param {string} str
 * @returns A string without two dashes in a row.
 */
function removeDuplicateHyphens(str) {
  return str.replace(/-{2,}/g, "-");
}

/**
 * Allow alphanumerics and hyphens.
 * @param {string} str
 * @returns {string} A string with all non-alphanumeric characters removed.
 */
function alphanumericsHyphens(str) {
  return str.replace(/[^a-zA-Z0-9-]/g, "");
}

/**
 * Allow alphanumerics, hyphens, and underscores.
 * @param {string} str
 * @returns {string} A string with all non-alphanumeric characters removed.
 */
function alphanumericsUnderscoresHyphens(str) {
  return str.replace(/[^a-zA-Z0-9_-]/g, "");
}

/**
 * Allow alphanumerics and underscores.
 * @param {string} str
 * @returns {string} A string with all non-alphanumeric characters removed.
 */
function alphanumericsUnderscores(str) {
  return str.replace(/[^a-zA-Z0-9_]/g, "");
}

/**
 * Allow alphanumerics, hyphens, peiods and underscores.
 * @param {string} str
 * @returns {string} A string with all non-alphanumeric characters removed.
 */
function alphanumericsUnderscoresPeriodsHyphens(str) {
  return str.replace(/[^a-zA-Z0-9_.-]/g, "");
}

const transformers = {
  alphanumerics: alphanumerics,
  alphanumericsHyphens: alphanumericsHyphens,
  alphanumericsUnderscores: alphanumericsUnderscores,
  alphanumericsUnderscoresHyphens: alphanumericsUnderscoresHyphens,
  alphanumericsUnderscoresPeriodsHyphens:
    alphanumericsUnderscoresPeriodsHyphens,
};

/**
 * Apply transformer
 * @param {string} identifier - Name of the transformer
 * @param {string} str - The string to transform
 * @returns {string} - The transformed string
 */
export default function transformer(identifier, str) {
  // lowercase the str
  // replace all whitespace with a dash
  let input = str.trim().toLowerCase().replace(/\s+/g, "-");

  // replace all special characters
  input = characterReplacement(input);

  // find the transformer
  if (transformers[identifier]) {
    return removeDuplicateHyphens(transformers[identifier](input));
  }

  throw new Error(`Transformer ${identifier} not found`);
}
