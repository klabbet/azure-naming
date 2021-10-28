import React from "react";
import { Button } from "react-bootstrap";

function Result({ resourceName }) {
  const isActive = resourceName && resourceName !== "";
  const inactiveClassname = isActive ? "" : "font-serif fst-italic text-muted";
  const activeBorder = isActive ? "border-success border-2" : "";
  function copyToClipboard() {
    navigator.clipboard.writeText(resourceName);
  }

  return (
    <div
      className={`border w-100 px-3 d-flex justify-content-between ${activeBorder} ${inactiveClassname}`}
      style={{ lineHeight: "3rem" }}
    >
      {resourceName || "Enter details to the left"}
      <Button
        size="sm"
        variant="link"
        className="font-regular"
        onClick={copyToClipboard}
      >
        Copy
      </Button>
    </div>
  );
}

export default Result;
