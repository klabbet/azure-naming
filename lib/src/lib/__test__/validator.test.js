"use strict";
exports.__esModule = true;
var validator_1 = require("../validator");
describe("validator", function () {
    describe("startWithLetter", function () {
        it("should be valid when resource name starts with letter", function () {
            // arrange
            var resourceName = "klabbet-web-dev-aa";
            // act
            var result = (0, validator_1.startWithLetter)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when resource name starts with a number", function () {
            // arrange
            var resourceName = "0klabbet-web-dev-aa";
            // act
            var result = (0, validator_1.startWithLetter)(resourceName);
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("startWithLetter");
        });
    });
    describe("startWithAlphanumeric", function () {
        it("should be valid when resource name starts with number", function () {
            // arrange
            var resourceName = "0klabbet-web-dev-aks";
            // act
            var result = (0, validator_1.startWithAlphanumeric)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when resource name starts with a dash", function () {
            // arrange
            var resourceName = "-klabbet-web-dev-aks";
            // act
            var result = (0, validator_1.startWithAlphanumeric)(resourceName);
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("startWithAlphanumeric");
        });
    });
    describe("atLeast2Labels", function () {
        it("should be valid when resource name has two labels separated by a dot", function () {
            // arrange
            var resourceName = "klabbet.web.prod.dnsz";
            // act
            var result = (0, validator_1.atLeast2Labels)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when resource name has only one label", function () {
            // arrange
            var resourceName = "localhost";
            // act
            var result = (0, validator_1.atLeast2Labels)(resourceName);
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("atLeast2Labels");
        });
    });
    describe("endWithAlphanumericOrUnderscore", function () {
        it("should be valid when resource name ends with underscore", function () {
            // arrange
            var resourceName = "AzureServiceEscapePlan_";
            // act
            var result = (0, validator_1.endWithAlphanumericOrUnderscore)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when resource name ends with a period", function () {
            // arrange
            var resourceName = "AzureServiceEscapePlan.";
            // act
            var result = (0, validator_1.endWithAlphanumericOrUnderscore)(resourceName);
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("endWithAlphanumericOrUnderscore");
        });
    });
    describe("endWithAlphanumeric", function () {
        it("should be valid when resource name ends with number", function () {
            // arrange
            var resourceName = "AzureServiceEscapePlan1";
            // act
            var result = (0, validator_1.endWithAlphanumeric)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when resource name ends with an underscore", function () {
            // arrange
            var resourceName = "AzureServiceEscapePlan_";
            // act
            var result = (0, validator_1.endWithAlphanumeric)(resourceName);
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("endWithAlphanumeric");
        });
    });
    describe("maxLength", function () {
        it("should be valid when resource name is within maxLength", function () {
            // arrange
            var resourceName = "klabbet-web-stage-appi";
            // act
            var result = (0, validator_1.maxLengthValidator)(63)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be valid when resource name is exactly maxLength", function () {
            // arrange
            var resourceName = "klabbet-web-stage-ase";
            // act
            var result = (0, validator_1.maxLengthValidator)(resourceName.length)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when resource name is exceeding maxLength", function () {
            // arrange
            var resourceName = "klabbet-web-stage-app-";
            // act
            var result = (0, validator_1.maxLengthValidator)(15)(resourceName);
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("15characterLimit");
        });
    });
    describe("minLength", function () {
        it("should be valid when resource name is longer than min length", function () {
            // arrange
            var resourceName = "klabbet-web-stage-app";
            // act
            var result = (0, validator_1.minLengthValidator)(5)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be valid when resource name is exactly at min length", function () {
            // arrange
            var resourceName = "klabbet-web-stage-app";
            // act
            var result = (0, validator_1.minLengthValidator)(resourceName.length)(resourceName);
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when resource name is shorter than min length", function () {
            // arrange
            var resourceName = "web";
            // act
            var result = (0, validator_1.minLengthValidator)(5)(resourceName);
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("atLeast5Characters");
        });
    });
    describe("validate", function () {
        it("should be valid when web app has less than 60 characters", function () {
            // arrange
            var resourceName = "klabbet-web-stage-app";
            // act
            var result = (0, validator_1["default"])(resourceName, "app");
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when web app has more than 60 characters", function () {
            // arrange
            var resourceName = "klabbet-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-stage-app";
            // act
            var result = (0, validator_1["default"])(resourceName, "app");
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("60characterLimit");
        });
        it("should be valid when web app has more than 2 characters", function () {
            // arrange
            var resourceName = "web";
            // act
            var result = (0, validator_1["default"])(resourceName, "app");
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when web app has less than 2 characters", function () {
            // arrange
            var resourceName = "w";
            // act
            var result = (0, validator_1["default"])(resourceName, "app");
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("atLeast2Characters");
        });
        it("should be valid when dns as at least 2 labels", function () {
            // arrange
            var resourceName = "klabbet.web.prod.dnsz";
            // act
            var result = (0, validator_1["default"])(resourceName, "dnsz");
            // assert
            expect(result).toBe(true);
        });
        it("should be invalid when dns has only 1 label", function () {
            // arrange
            var resourceName = "localhost";
            // act
            var result = (0, validator_1["default"])(resourceName, "dnsz");
            // assert
            expect(result).not.toBe(true);
            expect(result.validatorName).toBe("atLeast2Labels");
        });
    });
});
