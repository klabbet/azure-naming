import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CopyButton from "../CopyButton";

describe("<CopyButton />", () => {
  it("should write value to clipboard when pressed", () => {
    // arrange
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });

    const value = "test";
    const component = render(<CopyButton text="Copy" value={value} />);

    // act
    fireEvent.click(component.getByText("Copy"));

    // assert
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(value);
  });
});
