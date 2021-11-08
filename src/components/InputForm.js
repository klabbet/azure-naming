import React from "react";

import { Form } from "react-bootstrap";
import Info from "./Info";
import FormSelectFilter from "./FormSelectFilter";
import environments from "../lib/environments";
import getAzureResourceTypes from "../lib/azureResourceTypes";

function InputForm({ input, onChange }) {
  function setProjectName({ target }) {
    onChange && onChange({ ...input, projectName: target.value });
  }

  function setComponentName({ target }) {
    onChange && onChange({ ...input, componentName: target.value });
  }

  function setEnvironment({ target }) {
    onChange && onChange({ ...input, environment: target.value });
  }

  function setResourceType(value) {
    onChange && onChange({ ...input, resourceType: value });
  }

  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label className="font-monospace">Azure Resource*</Form.Label>
        <Info title="Example">Web</Info>
        <FormSelectFilter
          options={getAzureResourceTypes().map(({ abbr, type }) => ({
            value: abbr,
            text: type,
          }))}
          onChange={setResourceType}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label className="font-monospace">Project Name*</Form.Label>
        <Info title="Example" className="text-secondary">
          Corporate Bank
        </Info>
        <Form.Control
          required
          type="text"
          value={input.projectName}
          onChange={setProjectName}
          placeholder="Titanic"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label className="font-monospace">Component Name</Form.Label>
        <Info title="Example">Web</Info>
        <Form.Control
          type="text"
          value={input.componentName}
          onChange={setComponentName}
          placeholder="Web"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label className="font-monospace">Environment</Form.Label>
        <Info title="Example">Web</Info>
        <Form.Select value={input.environment} onChange={setEnvironment}>
          {environments.map((env) => (
            <option key={env.abbr} value={env.abbr}>
              {env.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default InputForm;
