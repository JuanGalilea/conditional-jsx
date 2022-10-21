import { IfElse } from "./IfElse.js";

export const Switch = IfElse;
export const Case = ({ value, condition, children}) => 
    value && value === condition ? children : null;