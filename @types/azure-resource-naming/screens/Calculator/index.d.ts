import { EnvironmentType } from "../../lib/environment";

export type AzureResource = {
  projectName: string;
  componentName: string;
  environment: EnvironmentType;
  resourceType: string;
};
