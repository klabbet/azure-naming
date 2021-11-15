import React from "react";
import { render, fireEvent, act } from "@testing-library/react";

import Info from "../Info";

describe("<Info />", () => {
  it("should render children in popover after click", async () => {
    // arrange
    const bodyText = "Makes much sense";
    const component = render(
      <Info title="Header">
        <p>{bodyText}</p>
      </Info>,
    );

    // act
    await act(async () => {
      fireEvent.click(component.getByRole("button"));
    });

    // assert
    expect(component.getByText(bodyText)).toBeInTheDocument();
  });
});
