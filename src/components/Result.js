import React, { useState } from "react";
import { Button } from "react-bootstrap";

function CopyButton({ resourceName }) {
  const [isClicked, setIsClicked] = useState(false);

  function copyToClipboard() {
    setIsClicked(true);
    navigator.clipboard.writeText(resourceName);
    setTimeout(() => setIsClicked(false), 1500);
  }

  if (isClicked) {
    return <span className="font-regular fst-normal">Copied</span>;
  } else {
    return (
      <Button
        disabled={resourceName === ""}
        size="sm"
        variant="link"
        className="font-regular"
        onClick={copyToClipboard}
      >
        Copy
      </Button>
    );
  }
}

function Result({ resourceName }) {
  const isActive = resourceName && resourceName !== "";
  const inactiveClassname = isActive ? "" : "font-serif fst-italic text-muted";
  const activeBorder = isActive ? "border-success border-2" : "";

  return (
    <div
      className={`border w-100 px-3 d-flex justify-content-between ${activeBorder} ${inactiveClassname}`}
      style={{ lineHeight: "3rem" }}
    >
      {resourceName || "Enter details to the left"}
      <CopyButton resourceName={resourceName} />
    </div>
  );
}

export default Result;
