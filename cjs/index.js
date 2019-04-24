"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var setIn = function setIn(obj, path, value) {
  if (path.length == 0 || typeof path.splice == 'undefined' || typeof path[0] == 'undefined') return value;
  var key = path.splice(0, 1);
  if (typeof obj[key] == 'undefined') obj[key] = {};
  obj[key] = setIn(obj[key], path, value);
  return obj;
};

var _default = setIn;
exports["default"] = _default;