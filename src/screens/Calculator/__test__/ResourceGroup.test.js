import React from "react";
import { render } from "@testing-library/react";

import ResourceGroup from "../ResourceGroup";

describe("<ResourceGroup />", () => {
  it("should display empty resource group name for default azure resource", () => {
    // arrange
    const initialAzureResource = {
      projectName: "",
      componentName: "",
      environment: "dev",
      resourceType: "",
    };

    // act
    const component = render(
      <ResourceGroup azureResource={initialAzureResource} />,
    );

    // assert
    expect(component.getByTestId("resource-group-td")).toHaveTextContent("");
  });

  it("should transform resource group name from just project name", () => {
    // arrange
    const azureResource = {
      projectName: "klabbet",
      componentName: "",
      environment: "stage",
      resourceType: "",
    };

    // act
    const component = render(<ResourceGroup azureResource={azureResource} />);

    // assert
    expect(component.getByTestId("resource-group-td")).toHaveTextContent(
      "klabbet-stage-rg",
    );
  });

  it("should transform resource group name from project and component name", () => {
    // arrange
    const azureResource = {
      projectName: "klabbet",
      componentName: "web",
      environment: "prod",
      resourceType: "",
    };

    // act
    const component = render(<ResourceGroup azureResource={azureResource} />);

    // assert
    expect(component.getByTestId("resource-group-td")).toHaveTextContent(
      "klabbet-web-prod-rg",
    );
  });

  it("should ignore resource type when creating resource group name", () => {
    // arrange
    const azureResource = {
      projectName: "klabbet",
      componentName: "",
      environment: "dev",
      resourceType: "baloney",
    };

    // act
    const component = render(<ResourceGroup azureResource={azureResource} />);

    // assert
    expect(component.getByTestId("resource-group-td")).toHaveTextContent(
      "klabbet-dev-rg",
    );
  });
});
