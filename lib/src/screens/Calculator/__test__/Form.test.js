"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var Form_1 = require("../Form");
describe("<Form />", function () {
    it("should callback onChange when project name is changed", function () {
        // arrange
        var initialAzureResource = {
            projectName: "",
            componentName: "",
            environment: "dev",
            resourceType: ""
        };
        var onChange = jest.fn();
        var component = (0, react_2.render)(<Form_1["default"] input={initialAzureResource} onChange={onChange}/>);
        // act
        react_2.fireEvent.change(component.getByLabelText("Project Name*"), {
            target: { value: "test" }
        });
        // assert
        expect(onChange).toHaveBeenCalledWith(__assign(__assign({}, initialAzureResource), { projectName: "test" }));
    });
    it("should callback onChange when componentName is changed", function () {
        // arrange
        var initialAzureResource = {
            projectName: "",
            componentName: "",
            environment: "dev",
            resourceType: ""
        };
        var onChange = jest.fn();
        var component = (0, react_2.render)(<Form_1["default"] input={initialAzureResource} onChange={onChange}/>);
        // act
        react_2.fireEvent.change(component.getByLabelText("Component Name"), {
            target: { value: "web" }
        });
        // assert
        expect(onChange).toHaveBeenCalledWith(__assign(__assign({}, initialAzureResource), { componentName: "web" }));
    });
    it("should callback onChange when environment is changed", function () {
        // arrange
        var initialAzureResource = {
            projectName: "",
            componentName: "",
            environment: "dev",
            resourceType: ""
        };
        var onChange = jest.fn();
        var component = (0, react_2.render)(<Form_1["default"] input={initialAzureResource} onChange={onChange}/>);
        // act
        react_2.fireEvent.change(component.getByLabelText("Environment"), {
            target: { value: "prod" }
        });
        // assert
        expect(onChange).toHaveBeenCalledWith(__assign(__assign({}, initialAzureResource), { environment: "prod" }));
    });
    it("should callback onChange when resourceType is changed", function () {
        // arrange
        var initialAzureResource = {
            projectName: "",
            componentName: "",
            environment: "dev",
            resourceType: ""
        };
        var onChange = jest.fn();
        var component = (0, react_2.render)(<Form_1["default"] input={initialAzureResource} onChange={onChange}/>);
        // act
        react_2.fireEvent.click(component.getByText("Static web app"));
        // assert
        expect(onChange).toHaveBeenCalledWith(__assign(__assign({}, initialAzureResource), { resourceType: "stapp" }));
    });
});
