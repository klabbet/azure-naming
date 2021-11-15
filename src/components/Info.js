// @ts-check
import React from "react";
import PropTypes from "prop-types";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

/**
 * A popover that displays a title and a body.
 * @param {string} title The title of the popover.
 * @param {React.ReactNode} body The body of the popover.
 */
function Overlay(title, body) {
  return (
    <Popover id="info-overlay">
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{body}</Popover.Body>
    </Popover>
  );
}

/**
 * Will display a help link, when pressed will display a popover with the help message.
 *
 * @param {object} props
 * @param {string} props.title - The title of the popover.
 * @param {React.ReactNode} props.children - The body of the popover.
 * @param {string} [props.className] - The class name of the button.
 */
function Info({ title, children, className = "" }) {
  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={Overlay(title, children)}
    >
      <Button
        variant="link"
        className={`text-sm text-white font-serif h-100 ${className}`}
        tabIndex={-1}
        role="button"
      >
        help
      </Button>
    </OverlayTrigger>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Info.defaultProps = {
  className: "",
};

export default Info;
