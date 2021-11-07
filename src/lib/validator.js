import { findValidations } from "./azureResourceTypes";

/**
 * Resource name must start with an alphanumeric character
 * @param {string} resourceName - Name of the resource
 * @returns {ValidationResult|boolean} - Validation result if invalid, otherwise true
 */
export function startWithAlphanumeric(resourceName) {
  // doesn't start with alphanumeric characters
  if (!/^[a-zA-Z0-9]/.test(resourceName)) {
    return {
      validatorName: "startWithAlphanumeric",
      message: "Resource name must start with an alphanumeric character",
    };
  }

  return true;
}

/**
 * Resource name must start with letter.
 * @param {string} resourceName - Name of the resource
 * @returns {ValidationResult|boolean} - Validation result if invalid, otherwise true
 */
export function startWithLetter(resourceName) {
  // doesn't start with letter
  if (!/^[a-zA-Z]/.test(resourceName)) {
    return {
      validatorName: "startWithLetter",
      message: "Resource name must start with letter.",
    };
  }

  return true;
}

const validators = {
  startWithLetter,
};

function validate(resourceName, resourceType) {
  const validations = findValidations(resourceType);

  // for all validations on the resource type
  for (let i = 0; i < validations.length; i++) {
    const validation = validations[i];
    // find a validator
    const validator = validators[validation];
    // if validator exists
    if (validator) {
      // validate the resource name
      const validationResult = validator(resourceName);
      // if invalid
      if (validationResult !== true) {
        return validationResult;
      }
    }
  }

  return true;
}
