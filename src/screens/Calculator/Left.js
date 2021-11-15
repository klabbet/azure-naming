// @ts-check
import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { AzureResourcePropType, AzureResourceDefaultProps } from "./props";
import Form from "./Form";

/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */

/**
 * Left part of the calculator represents information and input form.
 *
 * @component
 * @param {object} props
 * @param {AzureResource} props.input - Azure Resource form input.
 * @param {function} props.onChange - callback function for input change.
 */
function Left({ input, onChange }) {
  return (
    <Col lg className="bg-primary bg-gradient text-white">
      <div className="d-flex flex-column justify-content-center align-items-center h-100 py-4">
        <header className="w-75">
          <h1 className="text-uppercase text-center font-monospace">
            Azure Naming
          </h1>
          <p>
            This tool will help you name Azure Resources. It follows a naming
            convention that is described{" "}
            <a
              className="text-white"
              href="https://klabbet.atlassian.net/wiki/spaces/WIKI/pages/229445/Naming+Resources"
            >
              here
            </a>
            .
          </p>
        </header>
        <main className="w-75">
          <Form input={input} onChange={onChange} />
        </main>
      </div>
    </Col>
  );
}

Left.propTypes = {
  input: AzureResourcePropType,
  onChange: PropTypes.func.isRequired,
};

Left.defaultProps = {
  input: AzureResourceDefaultProps,
};

export default Left;
