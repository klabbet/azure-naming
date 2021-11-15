"use strict";
exports.__esModule = true;
exports.EnvironmentHelpText = exports.ComponentNameHelpText = exports.ProjectNameHelpText = exports.AzureResourceTypeHelpText = void 0;
var react_1 = require("react");
function AzureResourceTypeHelpText() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null,
            "Azure Resource Type ",
            react_1["default"].createElement("strong", null, "SHOULD"),
            " be one of the types in the",
            " ",
            react_1["default"].createElement("a", { href: "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations" }, "Microsoft list of Azure resource type abbreviations"),
            ".",
            " "),
        react_1["default"].createElement("p", null, "If the azure type is not in the list, you should make up your own abbreviation that doesn't conflict with any of the official ones.")));
}
exports.AzureResourceTypeHelpText = AzureResourceTypeHelpText;
function ProjectNameHelpText() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "MUST"),
            " include a project that that MAY be the application name."),
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "SHOULD"),
            " find a short name for your project or application that is easy to understand without specific domain knowledge."),
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "SHOULD NOT"),
            " include redundant information in your name, i.e. the name of your company."),
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "SHOULD NOT"),
            " use abbreviations in your name.")));
}
exports.ProjectNameHelpText = ProjectNameHelpText;
function ComponentNameHelpText() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "SHOULD"),
            " include a component name if your project or application consists of several components. Examples of components are web, api, service."),
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "SHOULD NOT"),
            " use resource type as component name, i.e. database, function, insights, vm."),
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "MAY"),
            " omit the component name if the project name is sufficient.")));
}
exports.ComponentNameHelpText = ComponentNameHelpText;
function EnvironmentHelpText() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "MUST"),
            " use the correct environment specifier for your environment."),
        react_1["default"].createElement("table", null,
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "Specifier"),
                    react_1["default"].createElement("th", null, "Environment"))),
            react_1["default"].createElement("tbody", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", null, "dev"),
                    react_1["default"].createElement("td", null, "Development")),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", null, "test"),
                    react_1["default"].createElement("td", null, "Test")),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", null, "stage"),
                    react_1["default"].createElement("td", null, "Staging")),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", null, "prod"),
                    react_1["default"].createElement("td", null, "Production")))),
        react_1["default"].createElement("p", null,
            "You ",
            react_1["default"].createElement("strong", null, "MAY"),
            " add custom environment specifiers to your naming convention.")));
}
exports.EnvironmentHelpText = EnvironmentHelpText;
