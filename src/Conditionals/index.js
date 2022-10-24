import { OnTrue } from "./OnTrue";
import { OnFalse } from "./OnFalse";

/**
 * Renders when its condition prop is truthy
 * - Synonyms: When, OnTrue
 * - See also: Unless, OnFalse
 * @function If
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export const If = OnTrue;

/**
 * Renders when its condition prop is truthy
 * - Synonyms: If, OnTrue
 * - See also: Unless, OnFalse
 * @function When
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export const When = OnTrue;

/**
 * Renders when its condition prop is falsy
 * - Synonyms: OnFalse
 * - See also: If, When, OnTrue
 * @function Unless
 * @param {object} props
 * @param {*} props.condition Value to check
 */
export const Unless = OnFalse;