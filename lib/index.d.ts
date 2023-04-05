import React from 'react';
/**
 * Renders when its IfElse parent condition is falsy
 * - Synonyms: Unless
 * - See also: If, When, OnTrue
 * @function OnFalse
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export declare const OnFalse: ({ condition, children, }: {
    condition?: unknown;
    children: React.ReactNode;
}) => JSX.Element | null;
/**
 * Renders when its IfElse parent condition is truthy
 * - Synonyms: If, When
 * - See also: Unless, OnFalse
 * @function OnTrue
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export declare const OnTrue: ({ condition, children, }: {
    condition?: unknown;
    children: React.ReactNode;
}) => JSX.Element | null;
/**
 * Renders when its condition prop is truthy
 * - Synonyms: When, OnTrue
 * - See also: Unless, OnFalse
 * @function If
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export declare const If: ({ condition, children, }: {
    condition?: unknown;
    children: React.ReactNode;
}) => JSX.Element | null;
/**
 * Renders when its condition prop is truthy
 * - Synonyms: If, OnTrue
 * - See also: Unless, OnFalse
 * @function When
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export declare const When: ({ condition, children, }: {
    condition?: unknown;
    children: React.ReactNode;
}) => JSX.Element | null;
/**
 * Renders when its condition prop is falsy
 * - Synonyms: OnFalse
 * - See also: If, When, OnTrue
 * @function Unless
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export declare const Unless: ({ condition, children, }: {
    condition?: unknown;
    children: React.ReactNode;
}) => JSX.Element | null;
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
export declare const IfElse: ({ condition, children, }: {
    condition?: unknown;
    children?: (Exclude<React.ReactNode, React.ReactFragment> | string) | (Exclude<React.ReactNode, React.ReactFragment> | string)[];
}) => JSX.Element | null;
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
export declare const Switch: ({ condition, children, }: {
    condition?: unknown;
    children?: (Exclude<React.ReactNode, React.ReactFragment> | string) | (Exclude<React.ReactNode, React.ReactFragment> | string)[];
}) => JSX.Element | null;
/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Satisfies, Switch
 * @function Case
 * @param {object} props
 * @param {*} props.value Value to check condition against
 * @param {*} props.condition Value to be checked
 */
export declare const Case: ({ value, condition, children, }: {
    value: unknown;
    condition?: unknown;
    children?: React.ReactNode;
}) => JSX.Element | null;
declare type SatisfiesProps<T> = {
    predicate: (arg: T) => unknown;
    condition?: T;
    children?: React.ReactNode;
};
/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Case, Switch
 * @function Satisfies
 * @param {object} props
 * @param {function(unknown): boolean} props.predicate Predicate function used to check condition
 * @param {*} props.condition Value to be checked
 */
export declare const Satisfies: ({ predicate, condition, children, }: SatisfiesProps<unknown>) => JSX.Element | null;
export {};
//# sourceMappingURL=index.d.ts.map