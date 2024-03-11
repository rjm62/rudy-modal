"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    message,
    closeModal
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "containerModal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "containerDisplay"
  }, /*#__PURE__*/_react.default.createElement("p", null, message)), /*#__PURE__*/_react.default.createElement("button", {
    className: "close",
    onClick: closeModal
  }, "X"));
}
var _default = exports.default = Modal;