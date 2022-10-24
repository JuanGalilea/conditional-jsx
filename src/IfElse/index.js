import { cloneElement } from "react";
import { OnTrue } from "../Conditionals/OnTrue";
import { OnFalse } from "../Conditionals/OnFalse";

const isObject = x => typeof(x) === "object";
const isNull = x => x === null;
const isArray = x => Array.isArray(x);

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
