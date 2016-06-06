'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (children, props) {
    return _react.Children.map(children, function (child, i) {
        return (0, _react.cloneElement)(child, (0, _omit3.default)(_extends({}, props, child.props, { childIndex: i }), 'children'));
    });
};

var _react = require('react');

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }