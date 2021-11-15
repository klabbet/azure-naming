// @ts-check
import React from "react";
import PropTypes from "prop-types";
import { Form as BootStrapForm } from "react-bootstrap";
import { AzureResourceDefaultProps, AzureResourcePropType } from "./props";

import Info from "../../components/Info";
import SelectFilter from "../../components/SelectFilter";
import environments from "../../lib/environments";
import getAzureResourceTypes from "../../lib/azureResourceTypes";
import {
  AzureResourceTypeHelpText,
  ProjectNameHelpText,
  ComponentNameHelpText,
  EnvironmentHelpText,
} from "./HelpText";

/** @typedef { import("../../../@types/azure-resource-naming/screens/Calculator/index").AzureResource} AzureResource */

/**
 * Form component for collecting the data for the calculator.
 *
 * @param {object} props
 * @param {AzureResource} props.input - The Azure resource to be used as the input for the calculator.
 * @param {function} props.onChange - Callback function to be called when the form is changed.
 */
function Form({ input, onChange }) {
  const setProjectName = ({ target }) =>
    onChange && onChange({ ...input, projectName: target.value });

  const setComponentName = ({ target }) =>
    onChange && onChange({ ...input, componentName: target.value });

  const setEnvironment = ({ target }) =>
    onChange && onChange({ ...input, environment: target.value });

  const setResourceType = (value) =>
    onChange && onChange({ ...input, resourceType: value });

  const azureResourceTypes = getAzureResourceTypes().map(({ abbr, type }) => ({
    value: abbr,
    text: type,
  }));

  return (
    <BootStrapForm>
      <BootStrapForm.Group className="mb-2">
        <BootStrapForm.Label className="font-monospace">
          Azure Resource*
        </BootStrapForm.Label>
        <Info title="Azure Resource Type">
          <AzureResourceTypeHelpText />
        </Info>
        <SelectFilter options={azureResourceTypes} onChange={setResourceType} />
      </BootStrapForm.Group>
      <BootStrapForm.Group className="mb-2" controlId="formProjectName">
        <BootStrapForm.Label className="font-monospace">
          Project Name*
        </BootStrapForm.Label>
        <Info title="Project Name" className="text-secondary">
          <ProjectNameHelpText />
        </Info>
        <BootStrapForm.Control
          required
          type="text"
          value={input.projectName}
          onChange={setProjectName}
          placeholder="Titanic"
        />
      </BootStrapForm.Group>
      <BootStrapForm.Group className="mb-2" controlId="formComponentName">
        <BootStrapForm.Label className="font-monospace">
          Component Name
        </BootStrapForm.Label>
        <Info title="Component Name">
          <ComponentNameHelpText />
        </Info>
        <BootStrapForm.Control
          type="text"
          value={input.componentName}
          onChange={setComponentName}
          placeholder="Web"
        />
      </BootStrapForm.Group>
      <BootStrapForm.Group className="mb-2" controlId="formEnvironment">
        <BootStrapForm.Label className="font-monospace">
          Environment
        </BootStrapForm.Label>
        <Info title="Environment">
          <EnvironmentHelpText />
        </Info>
        <BootStrapForm.Select
          value={input.environment}
          onChange={setEnvironment}
        >
          {environments.map((env) => (
            <option key={env.abbr} value={env.abbr}>
              {env.name}
            </option>
          ))}
        </BootStrapForm.Select>
      </BootStrapForm.Group>
    </BootStrapForm>
  );
}

Form.propTypes = {
  input: AzureResourcePropType,
  onChange: PropTypes.func.isRequired,
};

Form.defaultProps = {
  input: AzureResourceDefaultProps,
};

export default Form;
