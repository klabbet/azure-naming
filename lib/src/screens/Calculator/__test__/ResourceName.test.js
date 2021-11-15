"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var ResourceName_1 = require("../ResourceName");
describe("<ResourceName />", function () {
    it("should display default message when project name has not been set", function () {
        // arrange
        var azureResource = {
            projectName: "",
            componentName: "",
            environment: "dev",
            resourceType: ""
        };
        // act
        var component = (0, react_2.render)(<ResourceName_1["default"] azureResource={azureResource}/>);
        // assert
        expect(component.getByTestId("resource-name-span")).toHaveTextContent("Enter details to the left");
    });
    it("should display validation error when resource name doesn't validate", function () {
        // arrange
        var azureResource = {
            projectName: "-klabbet",
            componentName: "",
            environment: "dev",
            resourceType: "mysql"
        };
        // act
        var component = (0, react_2.render)(<ResourceName_1["default"] azureResource={azureResource}/>);
        // assert
        expect(component.getByTestId("validation-message-span")).toHaveTextContent("Resource name must start with an alphanumeric character");
    });
});
