"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var TagTable_1 = require("../TagTable");
describe("<TagTable />", function () {
    it("should find the environment name for the abbreviation", function () {
        // arrange
        var azureResource = {
            projectName: "",
            componentName: "",
            environment: "stage",
            resourceType: ""
        };
        // act
        var component = (0, react_2.render)(<TagTable_1["default"] azureResource={azureResource}/>);
        // assert
        expect(component.getByText("Staging")).toBeInTheDocument();
    });
});
