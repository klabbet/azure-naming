import React, { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";

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
  const [resourceFilter, setResourceFilter] = useState("");

  function setProjectName({ target }) {
    setInput({ ...input, projectName: target.value });
  }

  function setComponentName({ target }) {
    setInput({ ...input, componentName: target.value });
  }

  function setEnvironment({ target }) {
    setInput({ ...input, environment: target.value });
  }

  function setResourceType({ target }) {
    setInput({ ...input, resourceType: target.value });
  }

  function onChangeResourceFilter({ target }) {
    setResourceFilter(target.value);
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

  const filteredResourceTypes = getAzureResourceTypes().filter(
    (resourceType) =>
      resourceType.abbr.toLowerCase().includes(resourceFilter) ||
      resourceType.type.toLowerCase().includes(resourceFilter) ||
      resourceType.ns.toLowerCase().includes(resourceFilter)
  );

  return (
    <Container>
      <header>
        <h1>Azure Resource Naming Convention</h1>
        <p>
          This is a tool to help you name your Azure Resources. It follows the
          naming convention of Klabbet, which is described in full in this
          article.
        </p>
      </header>
      <main>
        <Form>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <span>Example: Corporate Bank</span>
            <Form.Control
              required
              type="text"
              value={input.projectName}
              onChange={setProjectName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Component Name (optional)</Form.Label>
            <span>Example: Web</span>
            <Form.Control
              type="text"
              value={input.componentName}
              onChange={setComponentName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Environment</Form.Label>
            <Form.Select value={input.environment} onChange={setEnvironment}>
              {environments.map((env) => (
                <option key={env.abbr} value={env.abbr}>
                  {env.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Azure Resource</Form.Label>
            <Form.Control
              type="search"
              value={resourceFilter}
              onChange={onChangeResourceFilter}
            />
            <Form.Select value={input.resourceType} onChange={setResourceType}>
              {filteredResourceTypes.map((resource) => (
                <option key={resource.abbr} value={resource.abbr}>
                  {resource.type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
        <div>
          <h1>The Name of your Resource</h1>
          <h2>{resourceName}</h2>
          <span>[copy]</span>
        </div>
        <h1>Tags</h1>
        <p>Add the following tags to your resource.</p>
        <Table>
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
      </main>
    </Container>
  );
}

export default App;
