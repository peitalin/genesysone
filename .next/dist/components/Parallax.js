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

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Parallax = function (_React$Component) {
  (0, _inherits3.default)(Parallax, _React$Component);

  function Parallax(props) {
    (0, _classCallCheck3.default)(this, Parallax);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Parallax.__proto__ || (0, _getPrototypeOf2.default)(Parallax)).call(this));

    _this.handleResize = function () {
      if (_this.state.windowHeight == window.innerHeight && _this.state.windowWidth == window.innerWidth) {
        return;
      } else {
        // console.log(`windowHeight: ${window.innerHeight}, windowWidth: ${window.innerWidth}`);
        _this.setState({
          windowWidth: window.innerWidth
        });
        // let fixedContainerHeight = document.getElementById('fixedContainer1').clientHeight
        _this.setState({
          threshold1: window.innerHeight
        });
      }
      _this.scaleParallaxHeight();
    };

    _this.scaleParallaxHeight = function () {
      if (_this.state.elems.parallaxBox1) {
        var viewportRatio = window.innerWidth / window.innerHeight;
        var viewportScale = viewportRatio > 1.4 ? 0.3 : 0.25;
        document.getElementById("parallaxBox1").style.transitionDuration = "height 200ms ease";
        // document.getElementById("parallaxBox1").style.height = `
        //     ${Math.round( (viewportRatio - viewportScale * viewportRatio) * 100 )}vh
        // `
        setTimeout(function () {
          document.getElementById("parallaxBox1").style.transitionDuration = "height 20000s ease";
        }, 100);
      }
      if (window.innerHeight > window.innerWidth * 1.5) {
        document.getElementById("mount1").style.bottom = "-5%";
      }
    };

    _this.handleScroll = function (event) {
      function getScrollTop(event) {
        var e = event || window.event;
        var srcElement = e.target || e.srcElement;
        return srcElement.documentElement.scrollTop || srcElement.body.scrollTop;
      }
      var scrollTop = event ? getScrollTop(event) : 0;
      var _this$state$elems = _this.state.elems,
          mount7 = _this$state$elems.mount7,
          mount6 = _this$state$elems.mount6,
          mount6demand = _this$state$elems.mount6demand,
          mount5 = _this$state$elems.mount5,
          mount4 = _this$state$elems.mount4,
          mount4supply = _this$state$elems.mount4supply,
          mount3 = _this$state$elems.mount3,
          mount2 = _this$state$elems.mount2,
          mount1 = _this$state$elems.mount1,
          mount1axes = _this$state$elems.mount1axes,
          logo1 = _this$state$elems.logo1,
          logoButtons = _this$state$elems.logoButtons,
          parallaxBox1 = _this$state$elems.parallaxBox1,
          particles = _this$state$elems.particles,
          maintitle = _this$state$elems.maintitle;
      var _this$state = _this.state,
          threshold1 = _this$state.threshold1,
          threshold2 = _this$state.threshold2,
          threshold3 = _this$state.threshold3;

      // parallax window 1

      if (scrollTop <= threshold1) {
        // particles.style.transform = `translate3d(0, ${scrollTop/1.1}px, 0) rotate3d(0,0,1,180deg)`
        maintitle.style.transform = 'translate3d(0, ' + scrollTop / 2 + 'px, 0)';
        // maintitle.style.opacity = `${(window.innerHeight-scrollTop)/window.innerHeight}`
        mount7.style.transform = 'translate3d(0, ' + scrollTop / 1.1 + 'px, 0)';
        mount6.style.transform = 'translate3d(0, ' + scrollTop / 1.3 + 'px, 0)';
        mount5.style.transform = 'translate3d(0, ' + scrollTop / 1.4 + 'px, 0)';
        mount4.style.transform = 'translate3d(0, ' + scrollTop / 1.6 + 'px, 0)';
        mount3.style.transform = 'translate3d(0, ' + scrollTop / 2.3 + 'px, 0)';
        mount2.style.transform = 'translate3d(0, ' + scrollTop / 3.8 + 'px, 0)';
        // mount1.style.transform = `translate3d(0, ${scrollTop/5.4}px, 0)`
      }
      // navbar fixed after scrolling down 100vh
      if (scrollTop > window.innerHeight) {
        document.getElementById('navbar-fixed').style.transform = 'translate3d(0, 0, 0)';
      } else {
        document.getElementById('navbar-fixed').style.transform = 'translate3d(0, -80px, 0)';
      }
    };

    _this.state = {
      scrollTop: 0,
      threshold1: 0,
      windowHeight: 0,
      windowWidth: 0,
      elems: {}
    };
    return _this;
  }

  (0, _createClass3.default)(Parallax, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', (0, _lodash.throttle)(this.handleScroll, 30));
      window.addEventListener('resize', (0, _lodash.throttle)(this.handleResize, 30));
      this.handleResize();
      this.setState({
        elems: {
          mount1: document.getElementById('mount1'),
          mount2: document.getElementById('mount2'),
          mount3: document.getElementById('mount3'),
          mount4: document.getElementById('mount4'),
          mount5: document.getElementById('mount5'),
          mount6: document.getElementById('mount6'),
          mount7: document.getElementById('mount7'),
          parallaxBox1: document.getElementById('parallaxBox1'),
          particles: document.getElementById('particles'),
          maintitle: document.getElementById('main-title')
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var imgDir = this.props.staticDir + 'img/';
      return _react2.default.createElement('div', { className: 'parallax', id: 'parallaxBox1' }, _react2.default.createElement('img', { id: 'mount7', className: 'mountain', src: imgDir + "mount7.svg" }), _react2.default.createElement('img', { id: 'mount6', className: 'mountain', src: imgDir + "mount6.svg" }), _react2.default.createElement('img', { id: 'mount5', className: 'mountain', src: imgDir + "mount5.svg" }), _react2.default.createElement('img', { id: 'mount4', className: 'mountain', src: imgDir + "mount4.svg" }), _react2.default.createElement('img', { id: 'mount3', className: 'mountain', src: imgDir + "mount3.svg" }), _react2.default.createElement('img', { id: 'mount2', className: 'mountain', src: imgDir + "mount2.svg" }));
    }
  }]);

  return Parallax;
}(_react2.default.Component);
// import throttle from 'lodash/throttle'
exports.default = Parallax;