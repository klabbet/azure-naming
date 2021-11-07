import { startWithLetter, startWithAlphanumeric } from "../validator";

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
});
