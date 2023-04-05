"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Satisfies = exports.Case = exports.Switch = exports.IfElse = exports.Unless = exports.When = exports.If = exports.OnTrue = exports.OnFalse = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
/**
 * Renders when its IfElse parent condition is falsy
 * - Synonyms: Unless
 * - See also: If, When, OnTrue
 * @function OnFalse
 * @param {object} props
 * @param {*} props.condition Value to check
 */
var OnFalse = function (_a) {
    var condition = _a.condition, children = _a.children;
    return (condition ? null : jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: children }, void 0));
};
exports.OnFalse = OnFalse;
/**
 * Renders when its IfElse parent condition is truthy
 * - Synonyms: If, When
 * - See also: Unless, OnFalse
 * @function OnTrue
 * @param {object} props
 * @param {*} props.condition Value to check
 */
var OnTrue = function (_a) {
    var condition = _a.condition, children = _a.children;
    return (condition ? jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: children }, void 0) : null);
};
exports.OnTrue = OnTrue;
/**
 * Renders when its condition prop is truthy
 * - Synonyms: When, OnTrue
 * - See also: Unless, OnFalse
 * @function If
 * @param {object} props
 * @param {*} props.condition Value to check
 */
exports.If = exports.OnTrue;
/**
 * Renders when its condition prop is truthy
 * - Synonyms: If, OnTrue
 * - See also: Unless, OnFalse
 * @function When
 * @param {object} props
 * @param {*} props.condition Value to check
 */
exports.When = exports.OnTrue;
/**
 * Renders when its condition prop is falsy
 * - Synonyms: OnFalse
 * - See also: If, When, OnTrue
 * @function Unless
 * @param {object} props
 * @param {*} props.condition Value to check
 */
exports.Unless = exports.OnFalse;
var isObject = function (x) { return typeof x === 'object'; };
var isNull = function (x) { return x === null; };
var isArray = function (x) { return Array.isArray(x); };
/**
 * Supplies its condition prop to all its children, use with OnTrue and OnFalse.
 * - See also: OnTrue, OnFalse
 *
 * Note:
 * - Supports multiple OnTrue, OnFalse and/or other components as children.
 * - It provides keys as best as it can to its children, but its better if they are provided beforehand.
 * @function IfElse
 * @param {object} props
 * @param {*} props.condition Value to check
 */
var IfElse = function (_a) {
    var condition = _a.condition, _b = _a.children, children = _b === void 0 ? null : _b;
    return !(typeof children === 'object') ||
        children === null ||
        typeof children === 'string' ? (children ? (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: children }, void 0)) : null) : (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: [children].flat().map(function (x) {
            var _a;
            return !(typeof x === 'object') ||
                isArray(x) ||
                typeof x === 'string' ||
                x === null
                ? x
                : react_1.cloneElement(x, {
                    condition: condition,
                    key: (x === null || x === void 0 ? void 0 : x.key) || ((_a = x === null || x === void 0 ? void 0 : x.props) === null || _a === void 0 ? void 0 : _a.value),
                });
        }) }, void 0));
};
exports.IfElse = IfElse;
/**
 * Supplies its condition prop to all its children, use with Case or Satisfies as children.
 * - See also: Case, Satisfies
 *
 * Note:
 * - Supports multiple Case, Satisfies and/or other components as children.
 * - Can also be used as IfElse, but the syntax is sub-optimal.
 * - It provides keys as best as it can to its children, but its better if they are provided beforehand.
 * @function Switch
 * @param {object} props
 * @param {*} props.condition Value to provide to children
 */
exports.Switch = exports.IfElse;
/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Satisfies, Switch
 * @function Case
 * @param {object} props
 * @param {*} props.value Value to check condition against
 * @param {*} props.condition Value to be checked
 */
var Case = function (_a) {
    var value = _a.value, condition = _a.condition, _b = _a.children, children = _b === void 0 ? null : _b;
    return (value === condition ? jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: children }, void 0) : null);
};
exports.Case = Case;
/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Case, Switch
 * @function Satisfies
 * @param {object} props
 * @param {function(unknown): boolean} props.predicate Predicate function used to check condition
 * @param {*} props.condition Value to be checked
 */
var Satisfies = function (_a) {
    var predicate = _a.predicate, condition = _a.condition, _b = _a.children, children = _b === void 0 ? null : _b;
    return predicate(condition) ? jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: children }, void 0) : null;
};
exports.Satisfies = Satisfies;
