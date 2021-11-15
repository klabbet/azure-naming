"use strict";
exports.__esModule = true;
// @ts-check
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var index_1 = require("./index");
var react_bootstrap_1 = require("react-bootstrap");
var Form_1 = require("./Form");
/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */
/**
 * Left part of the calculator represents information and input form.
 *
 * @component
 * @param {object} props
 * @param {AzureResource} props.input - Azure Resource form input.
 * @param {function} props.onChange - callback function for input change.
 */
function Left(_a) {
    var input = _a.input, onChange = _a.onChange;
    return (<react_bootstrap_1.Col lg={true} className="bg-primary bg-gradient text-white">
      <div className="d-flex flex-column justify-content-center align-items-center h-100 py-4">
        <header className="w-75">
          <h1 className="text-uppercase text-center font-monospace">
            Azure Naming
          </h1>
          <p>
            This tool will help you name Azure Resources. It follows a naming
            convention that is described{" "}
            <a className="text-white" href="https://klabbet.atlassian.net/wiki/spaces/WIKI/pages/229445/Naming+Resources">
              here
            </a>
            .
          </p>
        </header>
        <main className="w-75">
          <Form_1["default"] input={input} onChange={onChange}/>
        </main>
      </div>
    </react_bootstrap_1.Col>);
}
Left.propTypes = {
    input: index_1.AzureResourcePropType,
    onChange: prop_types_1["default"].func.isRequired
};
exports["default"] = Left;
