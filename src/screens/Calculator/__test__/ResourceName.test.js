import React from "react";
import { render } from "@testing-library/react";

import ResourceName from "../ResourceName";

describe("<ResourceName />", () => {
  it("should display default message when project name has not been set", () => {
    // arrange
    const azureResource = {
      projectName: "",
      componentName: "",
      environment: "dev",
      resourceType: "",
    };

    // act
    const component = render(<ResourceName azureResource={azureResource} />);

    // assert
    expect(component.getByTestId("resource-name-span")).toHaveTextContent(
      "Enter details to the left",
    );
  });

  it("should display validation error when resource name doesn't validate", () => {
    // arrange
    const azureResource = {
      projectName: "-klabbet", // name may not start with dash
      componentName: "",
      environment: "dev",
      resourceType: "mysql",
    };

    // act
    const component = render(<ResourceName azureResource={azureResource} />);

    // assert
    expect(component.getByTestId("validation-message-span")).toHaveTextContent(
      "Resource name must start with an alphanumeric character",
    );
  });
});
