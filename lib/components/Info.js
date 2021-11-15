"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_bootstrap_1 = require("react-bootstrap");
/**
 * A popover that displays a title and a body.
 * @param {string} title The title of the popover.
 * @param {any} body The body of the popover.
 */
function Overlay(title, body) {
    return (react_1["default"].createElement(react_bootstrap_1.Popover, { id: "info-overlay" },
        react_1["default"].createElement(react_bootstrap_1.Popover.Header, { as: "h3" }, title),
        react_1["default"].createElement(react_bootstrap_1.Popover.Body, null, body)));
}
/**
 * Will display a help link, when pressed will display a popover with the help message.
 * @param {string} title - The title of the popover.
 * @param {string} children - The body of the popover.
 * @param {string} className - The class name of the button.
 */
function Info(_a) {
    var title = _a.title, children = _a.children, className = _a.className;
    return (react_1["default"].createElement(react_bootstrap_1.OverlayTrigger, { trigger: "click", placement: "right", overlay: Overlay(title, children) },
        react_1["default"].createElement(react_bootstrap_1.Button, { variant: "link", className: "text-sm text-white font-serif h-100 " + className, tabIndex: "-1", role: "button" }, "help")));
}
Info.propTypes = {
    title: prop_types_1["default"].string.isRequired,
    children: prop_types_1["default"].any.isRequired,
    className: prop_types_1["default"].string
};
exports["default"] = Info;
