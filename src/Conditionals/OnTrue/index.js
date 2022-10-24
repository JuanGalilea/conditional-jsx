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