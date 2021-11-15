import { findTransformerName, findValidations } from "../azureResourceTypes";

describe("findTransformerName", () => {
  it("should find transformer 'alphanumerics' for Front Door firewall policy", () => {
    // arrange
    const resourceType = "fdfp";

    // act
    const transformerName = findTransformerName(resourceType);

    // arrange
    expect(transformerName).toBe("alphanumerics");
  });
});

describe("findValidations", () => {
  it("should find validations for Front Door firewall policy", () => {
    // arrange
    const resourceType = "fdfp";

    // act
    const validations = findValidations(resourceType);

    // arrange
    expect(validations).toContain("startWithLetter");
  });
});
