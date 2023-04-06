"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Satisfies = exports.Case = exports.Switch = exports.IfElse = exports.Unless = exports.When = exports.If = exports.OnTrue = exports.OnFalse = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var isArray = function (x) { return Array.isArray(x); };
var processChild = function (children) {
    if (children === null || children === undefined)
        return null;
    switch (typeof children) {
        case 'string':
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
        case 'number':
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
        case 'boolean':
            return null;
        case 'object':
            if (Array.isArray(children))
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children.map(processChild) });
            return children;
    }
};
/**
 * Renders when its IfElse parent condition is falsy. Booleans are never rendered.
 * - Synonyms: Unless
 * - See also: If, When, OnTrue
 */
var OnFalse = function (_a) {
    var condition = _a.condition, children = _a.children;
    return (condition ? null : processChild(children));
};
exports.OnFalse = OnFalse;
/**
 * Renders when its IfElse parent condition is truthy. Booleans are never rendered.
 * - Synonyms: If, When
 * - See also: Unless, OnFalse
 */
var OnTrue = function (_a) {
    var condition = _a.condition, children = _a.children;
    return (condition ? processChild(children) : null);
};
exports.OnTrue = OnTrue;
/**
 * Renders when its condition prop is truthy. Booleans are never rendered.
 * - Synonyms: When, OnTrue
 * - See also: Unless, OnFalse
 */
exports.If = exports.OnTrue;
/**
 * Renders when its condition prop is truthy. Booleans are never rendered.
 * - Synonyms: If, OnTrue
 * - See also: Unless, OnFalse
 */
exports.When = exports.OnTrue;
/**
 * Renders when its condition prop is falsy. Booleans are never rendered.
 * - Synonyms: OnFalse
 * - See also: If, When, OnTrue
 */
exports.Unless = exports.OnFalse;
/**
 * Supplies its condition prop to all its children, use with OnTrue and OnFalse.
 * - See also: OnTrue, OnFalse
 *
 * Note:
 * - Supports multiple OnTrue, OnFalse and/or other components as children.
 * - It provides keys as best as it can to its children, but its better if they are provided beforehand.
 */
var IfElse = function (_a) {
    var condition = _a.condition, _b = _a.children, children = _b === void 0 ? null : _b;
    return !(typeof children === 'object') ||
        children === null ||
        typeof children === 'string' ? (children ? (processChild(children)) : null) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: [children].flat().map(function (x) {
            var _a;
            return !(typeof x === 'object') ||
                isArray(x) ||
                typeof x === 'string' ||
                x === null
                ? x
                : (0, react_1.cloneElement)(x, {
                    condition: condition,
                    key: (x === null || x === void 0 ? void 0 : x.key) || ((_a = x === null || x === void 0 ? void 0 : x.props) === null || _a === void 0 ? void 0 : _a.value),
                });
        }) }));
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
 */
exports.Switch = exports.IfElse;
/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Satisfies, Switch
 */
var Case = function (_a) {
    var value = _a.value, condition = _a.condition, _b = _a.children, children = _b === void 0 ? null : _b;
    return (value === condition ? processChild(children) : null);
};
exports.Case = Case;
/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Case, Switch
 */
var Satisfies = function (_a) {
    var predicate = _a.predicate, condition = _a.condition, _b = _a.children, children = _b === void 0 ? null : _b;
    return predicate(condition) ? processChild(children) : null;
};
exports.Satisfies = Satisfies;
