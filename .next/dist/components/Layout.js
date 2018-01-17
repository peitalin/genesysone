'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Parallax = require('../components/Parallax');

var _Parallax2 = _interopRequireDefault(_Parallax);

var _Mountain = require('../components/Mountain1');

var _Mountain2 = _interopRequireDefault(_Mountain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATIC_DIR = './static/';
var FUNDNAME = 'GenesysOne';

var Header = function Header(props) {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, FUNDNAME + "Capital | Cryptoasset Investments"), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, user-scalable=no' }), _react2.default.createElement('link', { href: STATIC_DIR + "styles.css", rel: 'stylesheet' }), _react2.default.createElement('link', { href: STATIC_DIR + "mountains.css", rel: 'stylesheet' }), _react2.default.createElement('link', { href: STATIC_DIR + "navbar.css", rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Cousine', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lobster', rel: 'stylesheet' }));
};

var Logo = function Logo(props) {
  return _react2.default.createElement('div', { className: 'main-title', id: 'main-title' }, _react2.default.createElement('h1', null, FUNDNAME + " " + "Capital"), _react2.default.createElement('div', { className: 'main-title-sub' }, '\u2014 Investing in Cryptoasset Frontiers \u2014'));
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { className: 'genesis-container' }, _react2.default.createElement(Header, null), _react2.default.createElement(_Parallax2.default, { staticDir: STATIC_DIR }), _react2.default.createElement(Logo, null), _react2.default.createElement(_Mountain2.default, { id: 'mount1', fill: "#fafafa" }), _react2.default.createElement('div', { className: 'white-fill' }), props.children);
};

exports.default = Layout;