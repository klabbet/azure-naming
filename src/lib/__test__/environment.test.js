import { findEnvironmentName } from "../environments";

describe("findEnvironmentName", () => {
  it("should return correct environment name for the abbreviation", () => {
    // arrange
    const dev = "dev";
    const test = "test";
    const stage = "stage";
    const prod = "prod";

    // act
    const devName = findEnvironmentName(dev);
    const testName = findEnvironmentName(test);
    const stageName = findEnvironmentName(stage);
    const prodName = findEnvironmentName(prod);

    // assert
    expect(devName).toBe("Development");
    expect(testName).toBe("Test");
    expect(stageName).toBe("Staging");
    expect(prodName).toBe("Production");
  });
});
