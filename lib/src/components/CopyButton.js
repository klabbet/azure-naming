"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_bootstrap_1 = require("react-bootstrap");
/**
 * A button that let's you copy the current value to clipboard.
 * @param {string} text - The text to display on the button.
 * @param {string} value - The value to copy to clipboard.
 */
function CopyButton(_a) {
    var text = _a.text, value = _a.value, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b;
    var _c = (0, react_1.useState)(false), isClicked = _c[0], setIsClicked = _c[1];
    function copyToClipboard() {
        setIsClicked(true);
        window.navigator.clipboard.writeText(value);
        // flash the button with alternative text
        setTimeout(function () { return setIsClicked(false); }, 1500);
    }
    if (isClicked) {
        return <span className="font-regular fst-normal">Copied</span>;
    }
    else {
        return (<react_bootstrap_1.Button disabled={isDisabled} size="sm" variant="link" className="font-regular" onClick={copyToClipboard}>
                {text}
            </react_bootstrap_1.Button>);
    }
}
CopyButton.propTypes = {
    text: prop_types_1["default"].string.isRequired,
    value: prop_types_1["default"].string.isRequired,
    isDisabled: prop_types_1["default"].bool
};
exports["default"] = CopyButton;
