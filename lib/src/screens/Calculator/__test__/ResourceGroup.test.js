"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var ResourceGroup_1 = require("../ResourceGroup");
describe("<ResourceGroup />", function () {
    it("should display empty resource group name for default azure resource", function () {
        // arrange
        var initialAzureResource = {
            projectName: "",
            componentName: "",
            environment: "dev",
            resourceType: ""
        };
        // act
        var component = (0, react_2.render)(<ResourceGroup_1["default"] azureResource={initialAzureResource}/>);
        // assert
        expect(component.getByTestId("resource-group-td")).toHaveTextContent("");
    });
    it("should transform resource group name from just project name", function () {
        // arrange
        var azureResource = {
            projectName: "klabbet",
            componentName: "",
            environment: "stage",
            resourceType: ""
        };
        // act
        var component = (0, react_2.render)(<ResourceGroup_1["default"] azureResource={azureResource}/>);
        // assert
        expect(component.getByTestId("resource-group-td")).toHaveTextContent("klabbet-stage-rg");
    });
    it("should transform resource group name from project and component name", function () {
        // arrange
        var azureResource = {
            projectName: "klabbet",
            componentName: "web",
            environment: "prod",
            resourceType: ""
        };
        // act
        var component = (0, react_2.render)(<ResourceGroup_1["default"] azureResource={azureResource}/>);
        // assert
        expect(component.getByTestId("resource-group-td")).toHaveTextContent("klabbet-web-prod-rg");
    });
    it("should ignore resource type when creating resource group name", function () {
        // arrange
        var azureResource = {
            projectName: "klabbet",
            componentName: "",
            environment: "dev",
            resourceType: "baloney"
        };
        // act
        var component = (0, react_2.render)(<ResourceGroup_1["default"] azureResource={azureResource}/>);
        // assert
        expect(component.getByTestId("resource-group-td")).toHaveTextContent("klabbet-dev-rg");
    });
});
