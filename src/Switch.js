import { IfElse } from "./IfElse";

export const Switch = IfElse;
export const Case = ({ value, condition, children}) => 
    value && value === condition ? children : null;