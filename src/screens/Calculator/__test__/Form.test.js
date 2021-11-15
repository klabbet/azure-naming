import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Form from "../Form";

describe("<Form />", () => {
  it("should callback onChange when project name is changed", () => {
    // arrange
    const initialAzureResource = {
      projectName: "",
      componentName: "",
      environment: "dev",
      resourceType: "",
    };
    const onChange = jest.fn();
    const component = render(
      <Form input={initialAzureResource} onChange={onChange} />,
    );

    // act
    fireEvent.change(component.getByLabelText("Project Name*"), {
      target: { value: "test" },
    });

    // assert
    expect(onChange).toHaveBeenCalledWith({
      ...initialAzureResource,
      projectName: "test",
    });
  });

  it("should callback onChange when componentName is changed", () => {
    // arrange
    const initialAzureResource = {
      projectName: "",
      componentName: "",
      environment: "dev",
      resourceType: "",
    };
    const onChange = jest.fn();
    const component = render(
      <Form input={initialAzureResource} onChange={onChange} />,
    );

    // act
    fireEvent.change(component.getByLabelText("Component Name"), {
      target: { value: "web" },
    });

    // assert
    expect(onChange).toHaveBeenCalledWith({
      ...initialAzureResource,
      componentName: "web",
    });
  });

  it("should callback onChange when environment is changed", () => {
    // arrange
    const initialAzureResource = {
      projectName: "",
      componentName: "",
      environment: "dev",
      resourceType: "",
    };
    const onChange = jest.fn();
    const component = render(
      <Form input={initialAzureResource} onChange={onChange} />,
    );

    // act
    fireEvent.change(component.getByLabelText("Environment"), {
      target: { value: "prod" },
    });

    // assert
    expect(onChange).toHaveBeenCalledWith({
      ...initialAzureResource,
      environment: "prod",
    });
  });

  it("should callback onChange when resourceType is changed", () => {
    // arrange
    const initialAzureResource = {
      projectName: "",
      componentName: "",
      environment: "dev",
      resourceType: "",
    };
    const onChange = jest.fn();
    const component = render(
      <Form input={initialAzureResource} onChange={onChange} />,
    );

    // act
    fireEvent.click(component.getByText("Static web app"));

    // assert
    expect(onChange).toHaveBeenCalledWith({
      ...initialAzureResource,
      resourceType: "stapp",
    });
  });
});
