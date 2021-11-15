"use strict";
exports.__esModule = true;
exports.EnvironmentHelpText = exports.ComponentNameHelpText = exports.ProjectNameHelpText = exports.AzureResourceTypeHelpText = void 0;
var react_1 = require("react");
function AzureResourceTypeHelpText() {
    return (<div>
      <p>
        Azure Resource Type <strong>SHOULD</strong> be one of the types in the{" "}
        <a href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations">
          Microsoft list of Azure resource type abbreviations
        </a>
        .{" "}
      </p>
      <p>
        If the azure type is not in the list, you should make up your own
        abbreviation that doesn't conflict with any of the official ones.
      </p>
    </div>);
}
exports.AzureResourceTypeHelpText = AzureResourceTypeHelpText;
function ProjectNameHelpText() {
    return (<div>
      <p>
        You <strong>MUST</strong> include a project that that MAY be the
        application name.
      </p>
      <p>
        You <strong>SHOULD</strong> find a short name for your project or
        application that is easy to understand without specific domain
        knowledge.
      </p>
      <p>
        You <strong>SHOULD NOT</strong> include redundant information in your
        name, i.e. the name of your company.
      </p>
      <p>
        You <strong>SHOULD NOT</strong> use abbreviations in your name.
      </p>
    </div>);
}
exports.ProjectNameHelpText = ProjectNameHelpText;
function ComponentNameHelpText() {
    return (<div>
      <p>
        You <strong>SHOULD</strong> include a component name if your project or
        application consists of several components. Examples of components are
        web, api, service.
      </p>
      <p>
        You <strong>SHOULD NOT</strong> use resource type as component name,
        i.e. database, function, insights, vm.
      </p>
      <p>
        You <strong>MAY</strong> omit the component name if the project name is
        sufficient.
      </p>
    </div>);
}
exports.ComponentNameHelpText = ComponentNameHelpText;
function EnvironmentHelpText() {
    return (<div>
      <p>
        You <strong>MUST</strong> use the correct environment specifier for your
        environment.
      </p>
      <table>
        <thead>
          <tr>
            <th>Specifier</th>
            <th>Environment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dev</td>
            <td>Development</td>
          </tr>
          <tr>
            <td>test</td>
            <td>Test</td>
          </tr>
          <tr>
            <td>stage</td>
            <td>Staging</td>
          </tr>
          <tr>
            <td>prod</td>
            <td>Production</td>
          </tr>
        </tbody>
      </table>
      <p>
        You <strong>MAY</strong> add custom environment specifiers to your
        naming convention.
      </p>
    </div>);
}
exports.EnvironmentHelpText = EnvironmentHelpText;
