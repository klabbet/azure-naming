"use strict";
exports.__esModule = true;
exports.minLengthValidator = exports.maxLengthValidator = exports.endWithAlphanumericOrUnderscore = exports.endWithAlphanumeric = exports.atLeast2Labels = exports.startWithLetter = exports.startWithAlphanumeric = void 0;
var azureResourceTypes_1 = require("./azureResourceTypes");
/**
 * Resource name must start with an alphanumeric character
 * @param {string} resourceName - Name of the resource
 * @returns {ValidationResult|boolean} - Validation result if invalid, otherwise true
 */
function startWithAlphanumeric(resourceName) {
    // doesn't start with alphanumeric characters
    if (!/^[a-zA-Z0-9]/.test(resourceName)) {
        return {
            validatorName: "startWithAlphanumeric",
            message: "Resource name must start with an alphanumeric character"
        };
    }
    return true;
}
exports.startWithAlphanumeric = startWithAlphanumeric;
/**
 * Resource name must start with letter.
 * @param {string} resourceName - Name of the resource
 * @returns {ValidationResult|boolean} - Validation result if invalid, otherwise true
 */
function startWithLetter(resourceName) {
    // doesn't start with letter
    if (!/^[a-zA-Z]/.test(resourceName)) {
        return {
            validatorName: "startWithLetter",
            message: "Resource name must start with letter."
        };
    }
    return true;
}
exports.startWithLetter = startWithLetter;
/**
 * Resource name must include at least 2 labels
 * @param {string} resourceName - Name of the resource
 * @returns {ValidationResult|boolean} - Validation result if invalid, otherwise true
 */
function atLeast2Labels(resourceName) {
    // if the string has one dot `.` it has two labels
    if (!resourceName.includes(".")) {
        return {
            validatorName: "atLeast2Labels",
            message: "name must include at least 2 labels"
        };
    }
    return true;
}
exports.atLeast2Labels = atLeast2Labels;
/**
 * Resource name must end with alphanumeric
 * @param {string} resourceName - Name of the resource
 * @returns {ValidationResult|boolean} - Validation result if invalid, otherwise true
 */
function endWithAlphanumeric(resourceName) {
    // if the last character is not alphanumeric
    if (!/[a-zA-Z0-9]$/.test(resourceName)) {
        return {
            validatorName: "endWithAlphanumeric",
            message: "Resource name must end with an alphanumeric character"
        };
    }
    return true;
}
exports.endWithAlphanumeric = endWithAlphanumeric;
/**
 * Resource name must end with alphanumeric or underscore
 * @param {string} resourceName - Name of the resource
 * @returns {ValidationResult|boolean} - Validation result if invalid, otherwise true
 */
function endWithAlphanumericOrUnderscore(resourceName) {
    // if the last character is not alphanumeric or underscore
    if (!/[a-zA-Z0-9_]$/.test(resourceName)) {
        return {
            validatorName: "endWithAlphanumericOrUnderscore",
            message: "Resource name must end with alphanumeric or underscore"
        };
    }
    return true;
}
exports.endWithAlphanumericOrUnderscore = endWithAlphanumericOrUnderscore;
/**
 * Create a validator for max length validation
 * @param {string} maxLength- Maximum length of the resource name
 * @returns {function} - A function that validates resource name against the max length
 */
function maxLengthValidator(maxLength) {
    return function (resourceName) {
        if (resourceName.length > maxLength) {
            return {
                validatorName: maxLength + "characterLimit",
                message: "Resource name must be at most " + maxLength + " characters"
            };
        }
        return true;
    };
}
exports.maxLengthValidator = maxLengthValidator;
/**
 * Create a validator for min length validation
 * @param {string} minLength - Minimum length of the resource name
 * @returns {function} - A function that validates resource name against the ,om length
 */
function minLengthValidator(minLength) {
    return function (resourceName) {
        if (resourceName.length < minLength) {
            return {
                validatorName: "atLeast" + minLength + "Characters",
                message: "Resource name must be at least " + minLength + " characters"
            };
        }
        return true;
    };
}
exports.minLengthValidator = minLengthValidator;
var validators = {
    startWithAlphanumeric: startWithAlphanumeric,
    startWithLetter: startWithLetter,
    atLeast2Labels: atLeast2Labels,
    endWithAlphanumeric: endWithAlphanumeric,
    endWithAlphanumericOrUnderscore: endWithAlphanumericOrUnderscore,
    "128characterLimit": maxLengthValidator(128),
    "15characterLimit": maxLengthValidator(15),
    "23characterLimit": maxLengthValidator(23),
    "24characterLimit": maxLengthValidator(24),
    "260characterLimit": maxLengthValidator(260),
    "44characterLimit": maxLengthValidator(44),
    "50characterLimit": maxLengthValidator(50),
    "59characterLimit": maxLengthValidator(59),
    "60characterLimit": maxLengthValidator(60),
    "62characterLimit": maxLengthValidator(62),
    "63characterLimit": maxLengthValidator(63),
    "64characterLimit": maxLengthValidator(64),
    "80characterLimit": maxLengthValidator(80),
    atLeast2Characters: minLengthValidator(2),
    atLeast3Characters: minLengthValidator(3),
    atLeast4Characters: minLengthValidator(4),
    atLeast5Characters: minLengthValidator(5),
    atLeast6Characters: minLengthValidator(6)
};
/**
 * Validate resource name of the specific resource type
 * @param {string} resourceName - The resource name after it has been transformed
 * @param {string} resourceType - The resource type whose naming rules we validate with
 * @returns {ValidationResult|boolean} - Validation result if invalid, otherwise true
 */
function validator(resourceName, resourceType) {
    var validations = (0, azureResourceTypes_1.findValidations)(resourceType);
    // for all validations on the resource type
    for (var i = 0; i < validations.length; i++) {
        var validation = validations[i];
        // find a validator
        var validator_1 = validators[validation];
        // if validator exists
        if (validator_1) {
            // validate the resource name
            var validationResult = validator_1(resourceName);
            // if invalid
            if (validationResult !== true) {
                return validationResult;
            }
        }
    }
    return true;
}
exports["default"] = validator;
