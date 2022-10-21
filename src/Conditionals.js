export const OnTrue = ({ condition, children }) =>
    condition ? children : null;
export const OnFalse = ({ condition, children }) =>
    condition ? null : children;
export const If = OnTrue;
export const When = OnTrue;
export const Unless = OnFalse;