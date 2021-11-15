export type EnvironmentType = "dev" | "test" | "stage" | "prod";

export type Environment = {
  name: string;
  abbr: EnvironmentType
};
