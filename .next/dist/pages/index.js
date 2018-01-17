'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Philosophy = require('../components/Philosophy');

var _Philosophy2 = _interopRequireDefault(_Philosophy);

var _Thesis = require('../components/Thesis');

var _Thesis2 = _interopRequireDefault(_Thesis);

var _Team = require('../components/Team');

var _Team2 = _interopRequireDefault(_Team);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FUNDNAME = 'GenesysOne';

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      page: "home"
    }, _this.handleClick = function (newPage) {
      _this.setState({
        page: newPage
      });
    }, _this.renderPage = function () {
      switch (_this.state.page) {
        case 'home':
          {
            return _react2.default.createElement(_Philosophy2.default, { fundname: FUNDNAME });
          }
        case 'thesis':
          {
            return _react2.default.createElement(_Thesis2.default, null);
          }
        case 'team':
          {
            return _react2.default.createElement(_Team2.default, null);
          }
        default:
          {
            return _react2.default.createElement(_Philosophy2.default, { fundname: FUNDNAME });
          }
      }
    }, _this.renderFixedNavbar = function () {
      return _react2.default.createElement('div', { className: 'navbar-fixed-container', id: 'navbar-fixed' }, _react2.default.createElement('nav', { className: 'navbar', style: { "border-bottom": "none" } }, _react2.default.createElement('div', { className: 'nav-inside' }, _react2.default.createElement('ul', null, _react2.default.createElement('a', { className: (0, _classnames2.default)({ highlighted: _this.state.page == 'home' }),
        onClick: function onClick() {
          return _this.handleClick('home');
        } }, 'Home'), _react2.default.createElement('a', { className: (0, _classnames2.default)({ highlighted: _this.state.page == 'thesis' }),
        onClick: function onClick() {
          return _this.handleClick('thesis');
        } }, 'Thesis'), _react2.default.createElement('a', { className: (0, _classnames2.default)({ highlighted: _this.state.page == 'team' }),
        onClick: function onClick() {
          return _this.handleClick('team');
        } }, 'Team')))));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('div', { className: 'navbar-relative-container' }, _react2.default.createElement('nav', { className: 'navbar' }, _react2.default.createElement('div', { className: 'nav-inside' }, _react2.default.createElement('ul', null, _react2.default.createElement('a', { className: (0, _classnames2.default)({ highlighted: this.state.page == 'home' }),
        onClick: function onClick() {
          return _this2.handleClick('home');
        } }, 'Home'), _react2.default.createElement('a', { className: (0, _classnames2.default)({ highlighted: this.state.page == 'thesis' }),
        onClick: function onClick() {
          return _this2.handleClick('thesis');
        } }, 'Thesis'), _react2.default.createElement('a', { className: (0, _classnames2.default)({ highlighted: this.state.page == 'team' }),
        onClick: function onClick() {
          return _this2.handleClick('team');
        } }, 'Team'))))), this.renderFixedNavbar(), this.renderPage());
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;