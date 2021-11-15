// @ts-check
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";

/**
 * A button that let's you copy the current value to clipboard.
 *
 * @param {object} props
 * @param {string} props.text - The text to display on the button.
 * @param {string} props.value - The value to copy to clipboard.
 * @param {boolean} [props.isDisabled] - Whether the button should be disabled.
 */
function CopyButton({ text, value, isDisabled = false }) {
  const [isClicked, setIsClicked] = useState(false);

  const copyToClipboard = () => {
    setIsClicked(true);
    window.navigator.clipboard.writeText(value);
    // flash the button with alternative text
    setTimeout(() => setIsClicked(false), 1500);
  };

  if (isClicked) {
    return <span className="font-regular fst-normal">Copied</span>;
  }
  return (
    <Button
      disabled={isDisabled}
      size="sm"
      variant="link"
      className="font-regular"
      onClick={copyToClipboard}
    >
      {text}
    </Button>
  );
}

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

CopyButton.defaultProps = {
  isDisabled: false,
};

export default CopyButton;
