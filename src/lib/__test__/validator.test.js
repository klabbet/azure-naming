import validate, {
  startWithLetter,
  startWithAlphanumeric,
  atLeast2Labels,
  endWithAlphanumericOrUnderscore,
  endWithAlphanumeric,
  maxLengthValidator,
  minLengthValidator,
} from "../validator";

describe("validator", () => {
  describe("startWithLetter", () => {
    it("should be valid when resource name starts with letter", () => {
      // arrange
      const resourceName = "klabbet-web-dev-aa";

      // act
      const result = startWithLetter(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when resource name starts with a number", () => {
      // arrange
      const resourceName = "0klabbet-web-dev-aa";

      // act
      const result = startWithLetter(resourceName);

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("startWithLetter");
    });
  });

  describe("startWithAlphanumeric", () => {
    it("should be valid when resource name starts with number", () => {
      // arrange
      const resourceName = "0klabbet-web-dev-aks";

      // act
      const result = startWithAlphanumeric(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when resource name starts with a dash", () => {
      // arrange
      const resourceName = "-klabbet-web-dev-aks";

      // act
      const result = startWithAlphanumeric(resourceName);

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("startWithAlphanumeric");
    });
  });

  describe("atLeast2Labels", () => {
    it("should be valid when resource name has two labels separated by a dot", () => {
      // arrange
      const resourceName = "klabbet.web.prod.dnsz";

      // act
      const result = atLeast2Labels(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when resource name has only one label", () => {
      // arrange
      const resourceName = "localhost";

      // act
      const result = atLeast2Labels(resourceName);

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("atLeast2Labels");
    });
  });

  describe("endWithAlphanumericOrUnderscore", () => {
    it("should be valid when resource name ends with underscore", () => {
      // arrange
      const resourceName = "AzureServiceEscapePlan_";

      // act
      const result = endWithAlphanumericOrUnderscore(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when resource name ends with a period", () => {
      // arrange
      const resourceName = "AzureServiceEscapePlan.";

      // act
      const result = endWithAlphanumericOrUnderscore(resourceName);

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("endWithAlphanumericOrUnderscore");
    });
  });

  describe("endWithAlphanumeric", () => {
    it("should be valid when resource name ends with number", () => {
      // arrange
      const resourceName = "AzureServiceEscapePlan1";

      // act
      const result = endWithAlphanumeric(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when resource name ends with an underscore", () => {
      // arrange
      const resourceName = "AzureServiceEscapePlan_";

      // act
      const result = endWithAlphanumeric(resourceName);

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("endWithAlphanumeric");
    });
  });

  describe("maxLength", () => {
    it("should be valid when resource name is within maxLength", () => {
      // arrange
      const resourceName = "klabbet-web-stage-appi";

      // act
      const result = maxLengthValidator(63)(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be valid when resource name is exactly maxLength", () => {
      // arrange
      const resourceName = "klabbet-web-stage-ase";

      // act
      const result = maxLengthValidator(resourceName.length)(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when resource name is exceeding maxLength", () => {
      // arrange
      const resourceName = "klabbet-web-stage-app-";

      // act
      const result = maxLengthValidator(15)(resourceName);

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("15characterLimit");
    });
  });

  describe("minLength", () => {
    it("should be valid when resource name is longer than min length", () => {
      // arrange
      const resourceName = "klabbet-web-stage-app";

      // act
      const result = minLengthValidator(5)(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be valid when resource name is exactly at min length", () => {
      // arrange
      const resourceName = "klabbet-web-stage-app";

      // act
      const result = minLengthValidator(resourceName.length)(resourceName);

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when resource name is shorter than min length", () => {
      // arrange
      const resourceName = "web";

      // act
      const result = minLengthValidator(5)(resourceName);

      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("atLeast5Characters");
    });
  });

  describe("validate", () => {
    it("should be valid when web app has less than 60 characters", () => {
      // arrange
      const resourceName = "klabbet-web-stage-app";

      // act
      const result = validate(resourceName, "app");

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when web app has more than 60 characters", () => {
      // arrange
      const resourceName =
        "klabbet-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-web-stage-app";

      // act
      const result = validate(resourceName, "app");

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("60characterLimit");
    });

    it("should be valid when web app has more than 2 characters", () => {
      // arrange
      const resourceName = "web";

      // act
      const result = validate(resourceName, "app");

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when web app has less than 2 characters", () => {
      // arrange
      const resourceName = "w";

      // act
      const result = validate(resourceName, "app");

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("atLeast2Characters");
    });

    it("should be valid when dns as at least 2 labels", () => {
      // arrange
      const resourceName = "klabbet.web.prod.dnsz";

      // act
      const result = validate(resourceName, "dnsz");

      // assert
      expect(result).toBe(true);
    });

    it("should be invalid when dns has only 1 label", () => {
      // arrange
      const resourceName = "localhost";

      // act
      const result = validate(resourceName, "dnsz");

      // assert
      expect(result).not.toBe(true);
      expect(result.validatorName).toBe("atLeast2Labels");
    });
  });
});
