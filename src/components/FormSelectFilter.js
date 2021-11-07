import React, { useState } from "react";

import { Form, Collapse } from "react-bootstrap";

function Option({ value, text, onClick }) {
  function onClickHandler() {
    onClick && onClick({ value, text });
  }

  return (
    <li
      className={`border border-top-0 border-muted px-2 cursor-pointer bg-white text-dark hover-primary`}
      style={{ listStyleType: "none", lineHeight: "3rem" }}
      onClick={onClickHandler}
    >
      {text}
    </li>
  );
}

function FormSelectFilter({ options = [], currentValue, onChange }) {
  const [filter, setFilter] = useState("");
  const [isActive, setIsActive] = useState(false);

  function onChangeFilter({ target }) {
    setFilter(target.value);
  }

  function onOptionClick({ value, text }) {
    setFilter(text);
    onChange && onChange(value);
  }

  const filteredOptions = options.filter(
    ({ value, text }) =>
      value.toLowerCase().includes(filter) ||
      text.toLowerCase().includes(filter)
  );

  return (
    <div className="position-relative">
      <Form.Control
        type="search"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Type to filter"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <Collapse in={isActive}>
        <ol className={`p-0 z-100 position-absolute w-100`}>
          {filteredOptions.map(({ value, text }) => (
            <Option
              key={value}
              value={value}
              text={text}
              onClick={onOptionClick}
            />
          ))}
        </ol>
      </Collapse>
    </div>
  );
}

export default FormSelectFilter;
