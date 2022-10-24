import { IfElse } from "../IfElse";

export const Switch = IfElse;

export const Case = ({ value, condition, children}) => 
    value === condition ? children : null;

export const Satisfies = ({ predicate, condition, children}) => 
    predicate(condition) ? children : null;