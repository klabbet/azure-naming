import React, { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";

import Result from "./components/Result";
import InputForm from "./components/InputForm";
import { findEnvironmentName } from "./lib/environments";
import transformer from "./lib/transformer";
import { findTransformerName } from "./lib/azureResourceTypes";

function App() {
  const [input, setInput] = useState({
    projectName: "",
    componentName: "",
    environment: "dev",
    resourceType: "",
  });

  function onFormChange(input) {
    setInput(input);
  }

  let resourceName = "";
  if (input.projectName) {
    resourceName = transformer(
      findTransformerName(input.resourceType) ?? "alphanumericsHyphens",
      `${input.projectName} ${input.componentName} ${input.environment} ${input.resourceType}`
    );
  }

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
            <InputForm input={input} onChange={onFormChange} />
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
