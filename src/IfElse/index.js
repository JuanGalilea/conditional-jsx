import { cloneElement } from "react";
import { OnTrue } from "../Conditionals/OnTrue/index.js";
import { OnFalse } from "../Conditionals/OnFalse/index.js";

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

export { OnTrue, OnFalse };
