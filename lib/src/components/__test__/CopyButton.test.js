"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var CopyButton_1 = require("../CopyButton");
describe("<CopyButton />", function () {
    it("should write value to clipboard when pressed", function () {
        // arrange
        Object.assign(navigator, {
            clipboard: {
                writeText: jest.fn()
            }
        });
        var value = "test";
        var component = (0, react_2.render)(<CopyButton_1["default"] text="Copy" value={value}/>);
        // act
        react_2.fireEvent.click(component.getByText("Copy"));
        // assert
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(value);
    });
});
