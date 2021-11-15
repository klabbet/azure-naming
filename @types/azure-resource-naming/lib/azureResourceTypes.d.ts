export type AzureResourceType = {
  // The resource type name.
  type: string;
  // The resource type namespace.
  ns: string;
  // The resource type abbreviation.
  abbr: string;
  // The transformer to use on the resource name.
  transformer: string;
  // The name validations that apply to this resource type.
  validations: string[];
};
