// @ts-check
import replaceAll from "./characterReplacement";

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

/**
 * Transform into labels with alphanumerics, underscores and hyphens
 * @param {string} str The string to transform.
 * @returns {string} A string of labels, with all non-alphanumeric characters removed.
 */
function labelsAlphanumericsUnderscoresHyphens(str) {
  return alphanumericsUnderscoresHyphens(str).replace(/-/g, ".");
}

const transformers = {
  alphanumerics,
  alphanumericsHyphens,
  alphanumericsUnderscores,
  alphanumericsUnderscoresHyphens,
  alphanumericsUnderscoresPeriodsHyphens,
  labelsAlphanumericsUnderscoresHyphens,
};

/**
 * Apply transformer
 * @param {string} str - The string to transform
 * @param {string} [identifier] - Name of the transformer
 * @returns {string} - The transformed string
 */
export default function transformer(str, identifier) {
  // lowercase the str
  // replace all whitespace with a dash
  let input = str.trim().toLowerCase().replace(/\s+/g, "-");

  // replace all special characters
  input = replaceAll(input);

  // no transformer return it as it is
  if (!identifier) {
    return input;
  }

  if (transformers[identifier]) {
    // find the transformer
    return removeDuplicateHyphens(transformers[identifier](input));
  }

  throw new Error(`Transformer ${identifier} not found`);
}
