import React, { useState } from "react";
import { Button } from "react-bootstrap";

function CopyButton({ resourceName, validationResult }) {
  const [isClicked, setIsClicked] = useState(false);

  function copyToClipboard() {
    setIsClicked(true);
    navigator.clipboard.writeText(resourceName);
    setTimeout(() => setIsClicked(false), 1500);
  }

  const copyButtonDisabled = resourceName === null || validationResult !== true;

  if (isClicked) {
    return <span className="font-regular fst-normal">Copied</span>;
  } else {
    return (
      <Button
        disabled={copyButtonDisabled}
        size="sm"
        variant="link"
        className="font-regular"
        onClick={copyToClipboard}
      >
        {validationResult === true ? "Copy" : "Invalid"}
      </Button>
    );
  }
}

function Result({ resourceName, validationResult }) {
  const isActive = resourceName && resourceName !== "";
  const inactiveClassname = isActive ? "" : "font-serif fst-italic text-muted";
  const activeBorder = isActive ? "border-success border-2" : "";

  return (
    <div>
      <div
        className={`border w-100 px-3 d-flex justify-content-between ${activeBorder} ${inactiveClassname}`}
        style={{ lineHeight: "3rem" }}
      >
        <span style={{ overflowWrap: "break-word" }}>
          {resourceName || "Enter details to the left"}
        </span>

        <CopyButton
          resourceName={resourceName}
          validationResult={validationResult}
        />
      </div>
      {validationResult !== true && (
        <span className="font-regular fst-normal text-danger">
          {validationResult.message}
        </span>
      )}
    </div>
  );
}

export default Result;
