import React, { useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";

import Info from "./components/Info";
import FormSelectFilter from "./components/FormSelectFilter";
import Result from "./components/Result";
import getAzureResourceTypes from "./azureResourceTypes";

/*
 * Expressions
 */

const whitespace = /\s/g;
const notAnsi = /[^a-z0-9-]/g;

const environments = [
  { abbr: "dev", name: "Development" },
  { abbr: "test", name: "Test" },
  { abbr: "stage", name: "Staging" },
  { abbr: "prod", name: "Production" },
];

function findEnvironmentName(abbr) {
  const environment = environments.find((env) => env.abbr === abbr);
  return environment ? environment.name : "";
}

function App() {
  const [input, setInput] = useState({
    projectName: "",
    componentName: "",
    environment: "dev",
    resourceType: "",
  });

  function setProjectName({ target }) {
    setInput({ ...input, projectName: target.value });
  }

  function setComponentName({ target }) {
    setInput({ ...input, componentName: target.value });
  }

  function setEnvironment({ target }) {
    setInput({ ...input, environment: target.value });
  }

  function setResourceType(value) {
    setInput({ ...input, resourceType: value });
  }

  /**
   * Format project name
   * 1. Lower case
   * 2. Replace whitespace with string
   * 3. Remove non a-z 0-9 characters
   * @param {string} str - Input string to transform
   * @returns {string} A string that matches the project name format
   */
  function formatProjectName(str) {
    return str.toLowerCase().replace(whitespace, "-").replace(notAnsi, "");
  }

  /**
   * Format component name
   * 1. Lower case
   * 2. Replace whitespace with string
   * 3. Remove non a-z 0-9 characters
   * @param {string} str - Input string to transform
   * @returns {string} A string that matches the project name format
   */
  function formatComponentName(str) {
    return (
      "-" + str.toLowerCase().replace(whitespace, "-").replace(notAnsi, "")
    );
  }

  function formatEnvironment(str) {
    return "-" + str.toLowerCase();
  }

  function formatResourceType(str) {
    return "-" + str.toLowerCase();
  }

  let resourceName = "";
  resourceName += `${formatProjectName(input.projectName)}`;
  resourceName += input.componentName
    ? `${formatComponentName(input.componentName)}`
    : "";
  resourceName +=
    resourceName && input.environment
      ? formatEnvironment(input.environment)
      : "";
  resourceName +=
    resourceName && input.resourceType
      ? formatResourceType(input.resourceType)
      : "";

  return (
    <Row className="h-100">
      <Col lg={true} className="bg-primary bg-gradient text-white">
        <div className="d-flex flex-column justify-content-center align-items-center h-100 py-4">
          <header className="w-75">
            <h1 className="text-uppercase text-center font-monospace">
              Azure Naming
            </h1>
            <p>
              This tool will help you name Azure Resources. It follows a naming
              convention that is described{" "}
              <a className="text-white" href="/">
                here
              </a>
              .
            </p>
          </header>
          <main className="w-75">
            <Form>
              <Form.Group className="mb-2">
                <Form.Label className="font-monospace">Project Name</Form.Label>
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
                <Form.Label className="font-monospace">
                  Component Name
                </Form.Label>
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
                <Form.Select
                  value={input.environment}
                  onChange={setEnvironment}
                >
                  {environments.map((env) => (
                    <option key={env.abbr} value={env.abbr}>
                      {env.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="font-monospace">
                  Azure Resource
                </Form.Label>
                <Info title="Example">Web</Info>
                <FormSelectFilter
                  options={getAzureResourceTypes().map(({ abbr, type }) => ({
                    value: abbr,
                    text: type,
                  }))}
                  onChange={setResourceType}
                />
              </Form.Group>
            </Form>
          </main>
        </div>
      </Col>
      <Col lg={true}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100 py-4">
          <div className="w-75 mb-4">
            <h2 className="text-uppercase text-center text-muted">
              Computed Name
            </h2>
            <Result resourceName={resourceName} />
          </div>
          <div className="w-75">
            <h2 className="text-uppercase text-center text-muted">
              Resource Tags
            </h2>
            <Table bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Project</th>
                  <td>{input.projectName}</td>
                </tr>
                <tr>
                  <th>Component</th>
                  <td>{input.componentName}</td>
                </tr>
                <tr>
                  <th>Environment</th>
                  <td>{findEnvironmentName(input.environment)}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default App;
