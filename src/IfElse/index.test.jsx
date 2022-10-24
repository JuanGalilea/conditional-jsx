import React from "react";
import { render } from "../../lib/testUtils";
import { describe, it, expect } from "vitest";
import { IfElse, OnTrue, OnFalse } from ".";

const emptyReturn = "<html><head></head><body></body></html>";
describe("IfElse", () => {
  it("Doesn't render if no children are supplied", () => {
      expect(render(<IfElse/>)("body").html()).toEqual("")
  });
  it("Renders all non-object children", () => {
    expect(render(<IfElse>foo</IfElse>)("body").html()).toEqual("foo");
    expect(render(<IfElse>{"bar"}</IfElse>)("body").html()).toEqual("bar");
    expect(render(<IfElse>{1}</IfElse>)("body").html()).toEqual("1");
    expect(render(<IfElse>{true}</IfElse>)("body").html()).toEqual("");
    expect(render(<IfElse>{null}</IfElse>)("body").html()).toEqual("");
    expect(render(<IfElse>{undefined}</IfElse>)("body").html()).toEqual("");
    expect(render(<IfElse>{[1,2,3]}</IfElse>)("body").html()).toEqual("123");
  });
  it("Passes condition downstream correctly", () => {
    const expected = "foobar";
    const actual = render(
      <IfElse condition={true}>
        <OnTrue>
          foo
        </OnTrue>
        bar
        <OnFalse>
          baz
        </OnFalse>
      </IfElse>
      );
    expect(actual("body").html()).toEqual(expected);
  });
  it("Renders multiple conditionals and values", () => {
    const expected = "foobarbaz0";
    const actual = render(
      <IfElse>
        {undefined}
        <OnTrue>
          foo
        </OnTrue>
        <>{null}</>
        <OnFalse>
          foo
        </OnFalse>
        {false}
        <OnTrue>
          foo
        </OnTrue>
        <>{true}</>
        <OnFalse>
          bar
        </OnFalse>
        {[]}
        <OnTrue>
          foo
        </OnTrue>
        <>{""}</>
        <OnFalse>
          baz
        </OnFalse>
        {0}
      </IfElse>
      );
    expect(actual("body").html()).toEqual(expected);
  });
});
