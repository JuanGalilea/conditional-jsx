import { cloneElement } from "react";
import { OnTrue, OnFalse } from "./Conditionals";

export const IfElse = ({ condition, children }) =>
  children.map((x) =>
    cloneElement(x, {
      condition,
      key: x?.key || x?.props?.value || x?.type?.name,
    })
  );

module.exports = { OnTrue, OnFalse };