'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _passProps = require('../tools/passProps');

var _passProps2 = _interopRequireDefault(_passProps);

var _prefixer = require('../tools/prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BASE_STYLE = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
};

var TableRow = function (_Component) {
    _inherits(TableRow, _Component);

    function TableRow() {
        _classCallCheck(this, TableRow);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TableRow).apply(this, arguments));

        _this.onInteraction = function (rowIndex) {
            var rowInteraction = _this.props.rowInteraction;

            return function (e) {
                if (typeof rowInteraction === 'function') rowInteraction(e, rowIndex);
            };
        };

        _this.state = {
            altColor: false
        };

        return _this;
    }

    _createClass(TableRow, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props;
            var childIndex = _props.childIndex;
            var altColor = _props.altColor;

            this.setState({
                altColor: altColor && childIndex % 2 === 1 ? altColor : false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var style = _props2.style;
            var childIndex = _props2.childIndex;
            var rowInteraction = _props2.rowInteraction;
            var altColor = this.state.altColor;


            var compStyle = _extends({}, BASE_STYLE, style, {
                backgroundColor: altColor,
                cursor: typeof rowInteraction === 'function' ? 'pointer' : 'auto'
            });

            return _react2.default.createElement(
                'div',
                { style: _prefixer2.default.prefix(compStyle), onTouchTap: this.onInteraction(childIndex) },
                (0, _passProps2.default)(this.props.children, this.props)
            );
        }

        /*
        * Handlers
        * */

    }]);

    return TableRow;
}(_react.Component);

TableRow.propTypes = {
    rowInteraction: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.bool]),
    rowClass: _react.PropTypes.string,
    style: _react.PropTypes.object
};

TableRow.defaultProps = {
    rowInteraction: false,
    style: {}
};

exports.default = TableRow;