// @ts-check
import PropTypes from "prop-types";

export const AzureResourcePropType = PropTypes.shape({
  projectName: PropTypes.string.isRequired,
  componentName: PropTypes.string,
  environment: PropTypes.oneOf(["dev", "test", "stage", "prod"]).isRequired,
  resourceType: PropTypes.string.isRequired,
});

export const AzureResourceDefaultProps = {
  projectName: "",
  componentName: "",
  environmnent: "dev",
  resourceType: "",
};
