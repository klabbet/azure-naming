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
    return (<react_bootstrap_1.Form>
      <react_bootstrap_1.Form.Group className="mb-2">
        <react_bootstrap_1.Form.Label className="font-monospace">
          Azure Resource*
        </react_bootstrap_1.Form.Label>
        <Info_1["default"] title="Azure Resource Type">
          <HelpText_1.AzureResourceTypeHelpText />
        </Info_1["default"]>
        <SelectFilter_1["default"] options={azureResourceTypes} onChange={setResourceType}/>
      </react_bootstrap_1.Form.Group>
      <react_bootstrap_1.Form.Group className="mb-2" controlId="formProjectName">
        <react_bootstrap_1.Form.Label className="font-monospace">
          Project Name*
        </react_bootstrap_1.Form.Label>
        <Info_1["default"] title="Project Name" className="text-secondary">
          <HelpText_1.ProjectNameHelpText />
        </Info_1["default"]>
        <react_bootstrap_1.Form.Control required type="text" value={input.projectName} onChange={setProjectName} placeholder="Titanic"/>
      </react_bootstrap_1.Form.Group>
      <react_bootstrap_1.Form.Group className="mb-2" controlId="formComponentName">
        <react_bootstrap_1.Form.Label className="font-monospace">
          Component Name
        </react_bootstrap_1.Form.Label>
        <Info_1["default"] title="Component Name">
          <HelpText_1.ComponentNameHelpText />
        </Info_1["default"]>
        <react_bootstrap_1.Form.Control type="text" value={input.componentName} onChange={setComponentName} placeholder="Web"/>
      </react_bootstrap_1.Form.Group>
      <react_bootstrap_1.Form.Group className="mb-2" controlId="formEnvironment">
        <react_bootstrap_1.Form.Label className="font-monospace">
          Environment
        </react_bootstrap_1.Form.Label>
        <Info_1["default"] title="Environment">
          <HelpText_1.EnvironmentHelpText />
        </Info_1["default"]>
        <react_bootstrap_1.Form.Select value={input.environment} onChange={setEnvironment}>
          {environments_1["default"].map(function (env) { return (<option key={env.abbr} value={env.abbr}>
              {env.name}
            </option>); })}
        </react_bootstrap_1.Form.Select>
      </react_bootstrap_1.Form.Group>
    </react_bootstrap_1.Form>);
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
