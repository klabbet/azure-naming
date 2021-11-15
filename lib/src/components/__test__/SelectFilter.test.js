"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var SelectFilter_1 = require("../SelectFilter");
describe("<Option />", function () {
    it("should display text prop", function () {
        // act
        var component = (0, react_2.render)(<SelectFilter_1.Option text="Test" value="test"/>);
        // assert
        expect(component.getByText("Test")).toBeInTheDocument();
    });
    it("should pass text and value as arguments when clicked", function () {
        // arrange
        var _a = { text: "Test", value: "test" }, text = _a.text, value = _a.value;
        var onClick = jest.fn();
        var component = (0, react_2.render)(<SelectFilter_1.Option text={text} value={value} onClick={onClick}/>);
        // act
        react_2.fireEvent.click(component.getByText(text));
        // assert
        expect(onClick).toHaveBeenCalledWith({ text: text, value: value });
    });
});
describe("<SelectFilter />", function () {
    it("should render options in drop down when text field is focused", function () {
        // arrange
        var options = [
            { text: "App", value: "app" },
            { text: "DNS", value: "dns" },
            { text: "Azure SQL", value: "db" },
        ];
        var component = (0, react_2.render)(<SelectFilter_1["default"] options={options}/>);
        // act
        react_2.fireEvent.focus(component.getByRole("filter"));
        // assert
        options.forEach(function (option) {
            expect(component.getByText(option.text)).toBeInTheDocument();
        });
    });
    it("should filter options when writing in text field", function () {
        // arrange
        var options = [
            { text: "App", value: "app" },
            { text: "DNS", value: "dns" },
            { text: "Azure SQL", value: "db" },
        ];
        var component = (0, react_2.render)(<SelectFilter_1["default"] options={options}/>);
        // act
        react_2.fireEvent.focus(component.getByRole("filter"));
        react_2.fireEvent.change(component.getByRole("filter"), {
            target: { value: "sql" }
        });
        // assert one one option will be visible
        // and that option will be Azure SQL
        expect(component.getByText("Azure SQL")).toBeInTheDocument();
        expect(component.queryAllByText("App").length).toBe(0);
        expect(component.queryAllByText("DNS").length).toBe(0);
    });
    it("should pass selected value when clicked on an option", function () {
        // arrange
        var onChange = jest.fn();
        var options = [
            { text: "App", value: "app" },
            { text: "DNS", value: "dns" },
            { text: "Azure SQL", value: "db" },
        ];
        var component = (0, react_2.render)(<SelectFilter_1["default"] options={options} onChange={onChange}/>);
        // act
        react_2.fireEvent.focus(component.getByRole("filter"));
        react_2.fireEvent.click(component.getByText("App"));
        // assert
        expect(onChange).toHaveBeenCalledWith("app");
    });
});
