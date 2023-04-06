/// <reference types="react" />
/**
 * Renders when its IfElse parent condition is falsy. Booleans are never rendered.
 * - Synonyms: Unless
 * - See also: If, When, OnTrue
 */
export declare const OnFalse: ({ condition, children, }: {
    condition?: unknown;
    children: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
/**
 * Renders when its IfElse parent condition is truthy. Booleans are never rendered.
 * - Synonyms: If, When
 * - See also: Unless, OnFalse
 */
export declare const OnTrue: ({ condition, children, }: {
    condition?: unknown;
    children: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
/**
 * Renders when its condition prop is truthy. Booleans are never rendered.
 * - Synonyms: When, OnTrue
 * - See also: Unless, OnFalse
 */
export declare const If: ({ condition, children, }: {
    condition?: unknown;
    children: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
/**
 * Renders when its condition prop is truthy. Booleans are never rendered.
 * - Synonyms: If, OnTrue
 * - See also: Unless, OnFalse
 */
export declare const When: ({ condition, children, }: {
    condition?: unknown;
    children: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
/**
 * Renders when its condition prop is falsy. Booleans are never rendered.
 * - Synonyms: OnFalse
 * - See also: If, When, OnTrue
 */
export declare const Unless: ({ condition, children, }: {
    condition?: unknown;
    children: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
/**
 * Supplies its condition prop to all its children, use with OnTrue and OnFalse.
 * - See also: OnTrue, OnFalse
 *
 * Note:
 * - Supports multiple OnTrue, OnFalse and/or other components as children.
 * - It provides keys as best as it can to its children, but its better if they are provided beforehand.
 */
export declare const IfElse: ({ condition, children, }: {
    condition?: unknown;
    children?: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
/**
 * Supplies its condition prop to all its children, use with Case or Satisfies as children.
 * - See also: Case, Satisfies
 *
 * Note:
 * - Supports multiple Case, Satisfies and/or other components as children.
 * - Can also be used as IfElse, but the syntax is sub-optimal.
 * - It provides keys as best as it can to its children, but its better if they are provided beforehand.
 */
export declare const Switch: ({ condition, children, }: {
    condition?: unknown;
    children?: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Satisfies, Switch
 */
export declare const Case: ({ value, condition, children, }: {
    value: unknown;
    condition?: unknown;
    children?: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Case, Switch
 */
export declare const Satisfies: <T>(props: {
    predicate: (arg?: T) => unknown;
    condition?: T;
    children?: JSX.Element | string | number | boolean | null | undefined | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null;
//# sourceMappingURL=index.d.ts.map