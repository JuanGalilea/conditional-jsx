import { cloneElement } from "react";
/**
 * Renders when its IfElse parent condition is falsy
 * - Synonyms: Unless
 * - See also: If, When, OnTrue
 * @function OnFalse
 * @param {object} props
 * @param {*} props.condition Value to check
 */
 export const OnFalse = ({ condition, children }) =>
 condition ? null : children;
 
 /**
 * Renders when its IfElse parent condition is truthy
 * - Synonyms: If, When
 * - See also: Unless, OnFalse
 * @function OnTrue
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export const OnTrue = ({ condition, children }) =>
    condition ? children : null;

/**
 * Renders when its condition prop is truthy
 * - Synonyms: When, OnTrue
 * - See also: Unless, OnFalse
 * @function If
 * @param {object} props
 * @param {*} props.condition Value to check
 */
 export const If = OnTrue;

 /**
  * Renders when its condition prop is truthy
  * - Synonyms: If, OnTrue
  * - See also: Unless, OnFalse
  * @function When
  * @param {object} props
  * @param {*} props.condition Value to check
  */
 export const When = OnTrue;
 
 /**
  * Renders when its condition prop is falsy
  * - Synonyms: OnFalse
  * - See also: If, When, OnTrue
  * @function Unless
  * @param {object} props
  * @param {*} props.condition Value to check
  */
 export const Unless = OnFalse;

const isObject = x => typeof(x) === "object";
const isNull = x => x === null;
const isArray = x => Array.isArray(x);

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
export const IfElse = ({ condition, children }) => 
  !isObject(children) || isNull(children)
    ? children || null
    : [children].flat().map((x) => 
      !isObject(x) || isArray(x) 
        ? x 
        : cloneElement(x, {
            condition,
            key: x?.key || x?.props?.value || x?.type?.name,
          }));

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
 export const Switch = IfElse;

 /**
  * Renders when its the condition supplied by its parent matches its value prop.
  * - See also: Satisfies, Switch
  * @function Case
  * @param {object} props
  * @param {*} props.value Value to check condition against
  * @param {*} props.condition Value to be checked
  */
 export const Case = ({ value, condition, children}) => 
     value === condition ? children : null;
 
 /**
  * Renders when its the condition supplied by its parent matches its value prop.
  * - See also: Case, Switch
  * @function Satisfies
  * @param {object} props
  * @param {function(any): boolean} props.predicate Predicate function used to check condition
  * @param {*} props.condition Value to be checked
  */
 export const Satisfies = ({ predicate, condition, children}) => 
     predicate(condition) ? children : null;