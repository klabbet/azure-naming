import React from "react";
import { render } from "@testing-library/react";

import TagTable from "../TagTable";

describe("<TagTable />", () => {
  it("should find the environment name for the abbreviation", () => {
    // arrange
    const azureResource = {
      projectName: "",
      componentName: "",
      environment: "stage",
      resourceType: "",
    };

    // act
    const component = render(<TagTable azureResource={azureResource} />);

    // assert
    expect(component.getByText("Staging")).toBeInTheDocument();
  });
});
