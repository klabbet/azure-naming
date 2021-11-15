/**
 * Result for a validation.
 */
export type ValidationResult = {
  /**
   * Name of the validator.
   */
  validatorName: string;
  /**
   * Validation message.
   */
  message: string;
};

/**
 * A validator that will validate the resource name.
 */
declare function Validator(resourceName: string): ValidationResult | boolean;
