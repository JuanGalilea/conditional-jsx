import { IfElse } from "../IfElse";

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