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
// @ts-check
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_bootstrap_1 = require("react-bootstrap");
var Info_1 = require("../../components/Info");
var SelectFilter_1 = require("../../components/SelectFilter");
var environments_1 = require("../../lib/environments");
var azureResourceTypes_1 = require("../../lib/azureResourceTypes");
var HelpText_1 = require("./HelpText");
/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */
/**
 * Form component for collecting the data for the calculator.
 *
 * @component
 * @param {object} props
 * @param {AzureResource} props.input - The Azure resource to be used as the input for the calculator.
 * @param {function} props.onChange - Callback function to be called when the form is changed.
 */
function Form(_a) {
    var input = _a.input, onChange = _a.onChange;
    function setProjectName(_a) {
        var target = _a.target;
        onChange && onChange(__assign(__assign({}, input), { projectName: target.value }));
    }
    function setComponentName(_a) {
        var target = _a.target;
        onChange && onChange(__assign(__assign({}, input), { componentName: target.value }));
    }
    function setEnvironment(_a) {
        var target = _a.target;
        onChange && onChange(__assign(__assign({}, input), { environment: target.value }));
    }
    function setResourceType(value) {
        onChange && onChange(__assign(__assign({}, input), { resourceType: value }));
    }
    var azureResourceTypes = (0, azureResourceTypes_1["default"])().map(function (_a) {
        var abbr = _a.abbr, type = _a.type;
        return ({
            value: abbr,
            text: type
        });
    });
    return (react_1["default"].createElement(react_bootstrap_1.Form, null,
        react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: "mb-2" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: "font-monospace" }, "Azure Resource*"),
            react_1["default"].createElement(Info_1["default"], { title: "Azure Resource Type" },
                react_1["default"].createElement(HelpText_1.AzureResourceTypeHelpText, null)),
            react_1["default"].createElement(SelectFilter_1["default"], { options: azureResourceTypes, onChange: setResourceType })),
        react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: "mb-2", controlId: "formProjectName" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: "font-monospace" }, "Project Name*"),
            react_1["default"].createElement(Info_1["default"], { title: "Project Name", className: "text-secondary" },
                react_1["default"].createElement(HelpText_1.ProjectNameHelpText, null)),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { required: true, type: "text", value: input.projectName, onChange: setProjectName, placeholder: "Titanic" })),
        react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: "mb-2", controlId: "formComponentName" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: "font-monospace" }, "Component Name"),
            react_1["default"].createElement(Info_1["default"], { title: "Component Name" },
                react_1["default"].createElement(HelpText_1.ComponentNameHelpText, null)),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "text", value: input.componentName, onChange: setComponentName, placeholder: "Web" })),
        react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: "mb-2", controlId: "formEnvironment" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: "font-monospace" }, "Environment"),
            react_1["default"].createElement(Info_1["default"], { title: "Environment" },
                react_1["default"].createElement(HelpText_1.EnvironmentHelpText, null)),
            react_1["default"].createElement(react_bootstrap_1.Form.Select, { value: input.environment, onChange: setEnvironment }, environments_1["default"].map(function (env) { return (react_1["default"].createElement("option", { key: env.abbr, value: env.abbr }, env.name)); })))));
}
Form.prototype = {
    input: prop_types_1["default"].shape({
        projectName: prop_types_1["default"].string.isRequired,
        componentName: prop_types_1["default"].string,
        environment: prop_types_1["default"].oneOf(["dev", "test", "stage", "prod"]).isRequired,
        resourceType: prop_types_1["default"].string.isRequired
    }),
    onChange: prop_types_1["default"].func.isRequired
};
exports["default"] = Form;
