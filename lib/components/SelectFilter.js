"use strict";
/**
 * A simulated select box. I wanted something where you can write and get suggestions.
 * TODO make it possible to select value with keyboard.
 */
exports.__esModule = true;
exports.Option = void 0;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_bootstrap_1 = require("react-bootstrap");
/**
 * An option in the select box.
 * @param {string} value The value of the option.
 * @param {string} text The text of the option.
 * @param {function} onClick The function to call when the option is clicked.
 */
function Option(_a) {
    var value = _a.value, text = _a.text, _b = _a.onClick, onClick = _b === void 0 ? null : _b;
    function onClickHandler() {
        return onClick && onClick({ value: value, text: text });
    }
    return (react_1["default"].createElement("li", { className: "border border-top-0 border-muted px-2 cursor-pointer bg-white text-dark hover-primary", style: { listStyleType: "none", lineHeight: "3rem" }, onClick: onClickHandler }, text));
}
exports.Option = Option;
Option.propTypes = {
    value: prop_types_1["default"].string.isRequired,
    text: prop_types_1["default"].string.isRequired,
    onClick: prop_types_1["default"].func
};
/**
 * @typedef {Object} Option
 * @property {string} value The value of the option.
 * @property {string} text The text of the option.
 */
/**
 * A text input field with a dropdown.
 * @param {Option[]} options The options to show in the dropdown.
 * @param {function} onChange The function to call when the value changes.
 */
function SelectFilter(_a) {
    var _b = _a.options, options = _b === void 0 ? [] : _b, onChange = _a.onChange;
    var _c = (0, react_1.useState)(""), filter = _c[0], setFilter = _c[1];
    var _d = (0, react_1.useState)(false), isDropDownVisible = _d[0], setIsDropDownVisible = _d[1];
    function onChangeFilter(_a) {
        var target = _a.target;
        // update filter when value changes due to typing in the input control
        setFilter(target.value);
    }
    function onOptionClick(_a) {
        var value = _a.value, text = _a.text;
        // when an option is selected, set that option as the filter value
        setFilter(text);
        onChange && onChange(value);
    }
    function showDropDown() {
        setIsDropDownVisible(true);
    }
    function hideDropDown() {
        setIsDropDownVisible(false);
    }
    // filter what options that matches the filter
    var filteredOptions = options.filter(function (_a) {
        var value = _a.value, text = _a.text;
        return value.toLowerCase().includes(filter.toLowerCase()) ||
            text.toLowerCase().includes(filter.toLowerCase());
    });
    return (react_1["default"].createElement("div", { className: "position-relative" },
        react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "search", value: filter, onChange: onChangeFilter, placeholder: "Type to filter", onFocus: showDropDown, onBlur: hideDropDown, role: "filter" }),
        react_1["default"].createElement(react_bootstrap_1.Collapse, { "in": isDropDownVisible },
            react_1["default"].createElement("ol", { className: "p-0 z-100 position-absolute w-100" }, filteredOptions.map(function (_a) {
                var value = _a.value, text = _a.text;
                return (react_1["default"].createElement(Option, { key: value, value: value, text: text, onClick: onOptionClick }));
            })))));
}
SelectFilter.propTypes = {
    options: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
        value: prop_types_1["default"].string.isRequired,
        text: prop_types_1["default"].string.isRequired
    })),
    onChange: prop_types_1["default"].func
};
exports["default"] = SelectFilter;
