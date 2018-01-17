'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('div', { className: 'section1' }, _react2.default.createElement('div', { className: 'thesis' }, 'LP Page')));
};

exports.default = Index;