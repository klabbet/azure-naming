const environments = [
  { abbr: "dev", name: "Development" },
  { abbr: "test", name: "Test" },
  { abbr: "stage", name: "Staging" },
  { abbr: "prod", name: "Production" },
];

export function findEnvironmentName(abbr) {
  const environment = environments.find((env) => env.abbr === abbr);
  return environment ? environment.name : "";
}

export default environments;
