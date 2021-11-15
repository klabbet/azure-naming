// @ts-check
/**
 * A simulated select box. I wanted something where you can write and get suggestions.
 * TODO make it possible to select value with keyboard.
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Collapse } from "react-bootstrap";

/**
 * An option in the select box.
 *
 * @param {object} props
 * @param {string} props.value The value of the option.
 * @param {string} props.text The text of the option.
 * @param {boolean} props.isActive Whether the option is selected.
 * @param {function} [props.onClick] The function to call when the option is clicked.
 */
export function Option({ value, text, isActive = false, onClick = null }) {
  const onClickHandler = () => onClick && onClick({ value, text });
  const isActiveClass = isActive
    ? "bg-primary text-white"
    : "bg-white text-dark";
  return (
    <li style={{ listStyleType: "none", lineHeight: "3rem" }}>
      <button
        type="button"
        className={`w-100 border border-top-0 border-muted px-2 cursor-pointer hover-primary ${isActiveClass}`}
        onClick={onClickHandler}
        role="option"
        aria-selected={isActive}
        data-testid={isActive ? "select-filter-option-selected" : ""}
      >
        {text}
      </button>
    </li>
  );
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

Option.defaultProps = {
  isActive: false,
  onClick: null,
};

/**
 * @typedef {Object} Option
 * @property {string} value The value of the option.
 * @property {string} text The text of the option.
 */

/**
 * A text input field with a dropdown.
 *
 * @param {object} props
 * @param {Option[]} props.options The options to show in the dropdown.
 * @param {function} props.onChange The function to call when the value changes.
 */
function SelectFilter({ options = [], onChange }) {
  const [filter, setFilter] = useState("");
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // filter what options that matches the filter
  const filteredOptions = options.filter(
    ({ value, text }) =>
      value.toLowerCase().includes(filter.toLowerCase()) ||
      text.toLowerCase().includes(filter.toLowerCase()),
  );
  const onChangeFilter = ({ target }) => {
    // update filter when value changes due to typing in the input control
    setFilter(target.value);
  };

  const onOptionClick = ({ value, text }) => {
    // when an option is selected, set that option as the filter value
    setFilter(text);
    return onChange && onChange(value);
  };

  const showDropDown = () => {
    setIsDropDownVisible(true);
  };

  const hideDropDown = () => {
    setIsDropDownVisible(false);
  };

  const setNextOption = () => {
    if (selectedIndex === null) {
      setSelectedIndex(0);
    } else if (selectedIndex < options.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  const setPreviousOption = () => {
    if (selectedIndex === null) {
      setSelectedIndex(options.length - 1);
    } else if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(options.length - 1);
    }
  };

  const setCurrentOption = () => {
    const option = filteredOptions[selectedIndex ?? -1];
    if (option) {
      setFilter(option.text);
      return onChange && onChange(option.value);
    }

    return null;
  };

  const onKeyDownHandler = ({ keyCode }) => {
    // keys allowed in drop down navigation
    const keys = {
      13: "Enter",
      27: "Escape",
      38: "Up",
      40: "Down",
    };

    switch (keys[keyCode]) {
      // down key select next option
      case "Down":
        setNextOption();
        break;
      // up key select previous option
      case "Up":
        setPreviousOption();
        break;
      // enter key will copy current option to text box
      // clear the selected index and hide drop down
      case "Enter":
        setCurrentOption();
        setSelectedIndex(null);
        hideDropDown();
        break;
      // escape key will clear the selected index and hide drop down
      case "Escape":
        setFilter("");
        setSelectedIndex(null);
        hideDropDown();
        break;
      // writing in the text box will clear selection
      default:
        setSelectedIndex(null);
        break;
    }
  };

  return (
    <div className="position-relative">
      <Form.Control
        type="search"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Type to filter"
        onFocus={showDropDown}
        onBlur={hideDropDown}
        data-testid="select-filter-input"
        onKeyDown={onKeyDownHandler}
      />
      <Collapse in={isDropDownVisible} role="combobox">
        <ol className="p-0 z-100 position-absolute w-100">
          {filteredOptions.map(({ value, text }, index) => (
            <Option
              key={value}
              value={value}
              text={text}
              onClick={onOptionClick}
              isActive={selectedIndex === index}
            />
          ))}
        </ol>
      </Collapse>
    </div>
  );
}

SelectFilter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  onChange: PropTypes.func,
};

SelectFilter.defaultProps = {
  options: [],
  onChange: null,
};

export default SelectFilter;
