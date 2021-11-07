import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

function Overlay(title, body) {
  return (
    <Popover id="info-overlay">
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{body}</Popover.Body>
    </Popover>
  );
}

function Info({ title, children, className }) {
  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={Overlay(title, children)}
    >
      <Button
        variant="link"
        className={`text-sm text-white font-serif h-100 ${className}`}
        tabIndex="-1"
      >
        help
      </Button>
    </OverlayTrigger>
  );
}

export default Info;
