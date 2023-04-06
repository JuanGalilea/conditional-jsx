import React, { cloneElement } from 'react';

const isArray = (x: unknown): x is unknown[] => Array.isArray(x);

const processChild = (
  children:
    | JSX.Element
    | string
    | number
    | boolean
    | null
    | undefined
    | (JSX.Element | string | number | boolean | null | undefined)[]
): JSX.Element | null => {
  if (children === null || children === undefined) return null;
  switch (typeof children) {
    case 'string':
      return <>{children}</>;
    case 'number':
      return <>{children}</>;
    case 'boolean':
      return null;
    case 'object':
      if (Array.isArray(children)) return <>{children.map(processChild)}</>;
      return children;
  }
};

/**
 * Renders when its IfElse parent condition is falsy. Booleans are never rendered.
 * - Synonyms: Unless
 * - See also: If, When, OnTrue
 */
export const OnFalse = ({
  condition,
  children,
}: {
  condition?: unknown;
  children:
    | JSX.Element
    | string
    | number
    | boolean
    | null
    | undefined
    | (JSX.Element | string | number | boolean | null | undefined)[];
}): JSX.Element | null => (condition ? null : processChild(children));

/**
 * Renders when its IfElse parent condition is truthy. Booleans are never rendered.
 * - Synonyms: If, When
 * - See also: Unless, OnFalse
 */
export const OnTrue = ({
  condition,
  children,
}: {
  condition?: unknown;
  children:
    | JSX.Element
    | string
    | number
    | boolean
    | null
    | undefined
    | (JSX.Element | string | number | boolean | null | undefined)[];
}): JSX.Element | null => (condition ? processChild(children) : null);

/**
 * Renders when its condition prop is truthy. Booleans are never rendered.
 * - Synonyms: When, OnTrue
 * - See also: Unless, OnFalse
 */
export const If = OnTrue;

/**
 * Renders when its condition prop is truthy. Booleans are never rendered.
 * - Synonyms: If, OnTrue
 * - See also: Unless, OnFalse
 */
export const When = OnTrue;

/**
 * Renders when its condition prop is falsy. Booleans are never rendered.
 * - Synonyms: OnFalse
 * - See also: If, When, OnTrue
 */
export const Unless = OnFalse;

/**
 * Supplies its condition prop to all its children, use with OnTrue and OnFalse.
 * - See also: OnTrue, OnFalse
 *
 * Note:
 * - Supports multiple OnTrue, OnFalse and/or other components as children.
 * - It provides keys as best as it can to its children, but its better if they are provided beforehand.
 */
export const IfElse = ({
  condition,
  children = null,
}: {
  condition?: unknown;
  children?:
    | JSX.Element
    | string
    | number
    | boolean
    | null
    | undefined
    | (JSX.Element | string | number | boolean | null | undefined)[];
}): JSX.Element | null =>
  !(typeof children === 'object') ||
  children === null ||
  typeof children === 'string' ? (
    children ? (
      processChild(children)
    ) : null
  ) : (
    <>
      {[children].flat().map((x) =>
        !(typeof x === 'object') ||
        isArray(x) ||
        typeof x === 'string' ||
        x === null
          ? x
          : cloneElement(x, {
              condition,
              key: x?.key || x?.props?.value,
            })
      )}
    </>
  );

/**
 * Supplies its condition prop to all its children, use with Case or Satisfies as children.
 * - See also: Case, Satisfies
 *
 * Note:
 * - Supports multiple Case, Satisfies and/or other components as children.
 * - Can also be used as IfElse, but the syntax is sub-optimal.
 * - It provides keys as best as it can to its children, but its better if they are provided beforehand.
 */
export const Switch = IfElse;

/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Satisfies, Switch
 */
export const Case = ({
  value,
  condition,
  children = null,
}: {
  value: unknown;
  condition?: unknown;
  children?:
    | JSX.Element
    | string
    | number
    | boolean
    | null
    | undefined
    | (JSX.Element | string | number | boolean | null | undefined)[];
}): JSX.Element | null => (value === condition ? processChild(children) : null);

/**
 * Renders when its the condition supplied by its parent matches its value prop.
 * - See also: Case, Switch
 */
export const Satisfies: <T>(props: {
  predicate: (arg?: T) => unknown;
  condition?: T;
  children?:
    | JSX.Element
    | string
    | number
    | boolean
    | null
    | undefined
    | (JSX.Element | string | number | boolean | null | undefined)[];
}) => JSX.Element | null = ({ predicate, condition, children = null }) =>
  predicate(condition) ? processChild(children) : null;