import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import SelectFilter, { Option } from "../SelectFilter";

describe("<Option />", () => {
  it("should display text prop", () => {
    // act
    const component = render(<Option text="Test" value="test" />);

    // assert
    expect(component.getByText("Test")).toBeInTheDocument();
  });

  it("should pass text and value as arguments when clicked", () => {
    // arrange
    const { text, value } = { text: "Test", value: "test" };
    const onClick = jest.fn();
    const component = render(
      <Option text={text} value={value} onClick={onClick} />,
    );

    // act
    fireEvent.click(component.getByText(text));

    // assert
    expect(onClick).toHaveBeenCalledWith({ text, value });
  });
});

describe("<SelectFilter />", () => {
  it("should render options in drop down when text field is focused", () => {
    // arrange
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(<SelectFilter options={options} />);

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));

    // assert
    options.forEach((option) => {
      expect(component.getByText(option.text)).toBeInTheDocument();
    });
  });

  it("should filter options when writing in text field", () => {
    // arrange
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(<SelectFilter options={options} />);

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));
    fireEvent.change(component.getByTestId("select-filter-input"), {
      target: { value: "sql" },
    });

    // assert one one option will be visible
    // and that option will be Azure SQL

    expect(component.getByText("Azure SQL")).toBeInTheDocument();
    expect(component.queryAllByText("App").length).toBe(0);
    expect(component.queryAllByText("DNS").length).toBe(0);
  });

  it("should pass selected value when clicked on an option", () => {
    // arrange
    const onChange = jest.fn();
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(
      <SelectFilter options={options} onChange={onChange} />,
    );

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));
    fireEvent.click(component.getByText("App"));

    // assert
    expect(onChange).toHaveBeenCalledWith("app");
  });

  it("should select first item in dropdown when down arrow is pressed", () => {
    // arrange
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(<SelectFilter options={options} />);

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      keyCode: 40,
    });

    // assert
    expect(
      component.getByTestId("select-filter-option-selected"),
    ).toHaveTextContent("App");
  });

  it("should select last item in dropdown when up arrow is pressed", () => {
    // arrange
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(<SelectFilter options={options} />);

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      keyCode: 38,
    });

    // assert
    expect(
      component.getByTestId("select-filter-option-selected"),
    ).toHaveTextContent("Azure SQL");
  });

  it("should select second item in dropdown when down arrow is pressed twice", () => {
    // arrange
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(<SelectFilter options={options} />);

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      keyCode: 40,
    });
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      keyCode: 40,
    });

    // assert
    expect(
      component.getByTestId("select-filter-option-selected"),
    ).toHaveTextContent("DNS");
  });

  it("should select first item in dropdown when down arrow and then up arrow was pressed", () => {
    // arrange
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(<SelectFilter options={options} />);

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      keyCode: 40,
    });
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      keyCode: 40,
    });
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      keyCode: 38,
    });

    // assert
    expect(
      component.getByTestId("select-filter-option-selected"),
    ).toHaveTextContent("App");
  });

  it("should close dropdown when escape button was pressed", async () => {
    // arrange
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(<SelectFilter options={options} />);

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      // escape
      keyCode: 27,
    });

    await waitFor(
      () => expect(component.getByRole("combobox")).toHaveClass("collapse"),
      {
        timeout: 1000,
      },
    );
  });

  it("should copy the selected value to text box when enter key was pressed", () => {
    // arrange
    const options = [
      { text: "App", value: "app" },
      { text: "DNS", value: "dns" },
      { text: "Azure SQL", value: "db" },
    ];

    const component = render(<SelectFilter options={options} />);

    // act
    fireEvent.focus(component.getByTestId("select-filter-input"));
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      // down arrow
      keyCode: 40,
    });
    fireEvent.keyDown(component.getByTestId("select-filter-input"), {
      // enter
      keyCode: 13,
    });

    // assert
    expect(component.getByTestId("select-filter-input")).toHaveValue("App");
  });
});
