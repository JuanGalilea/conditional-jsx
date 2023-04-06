/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '../utils/testUtils';
import { describe, it, expect } from 'vitest';
import { Case, IfElse, OnFalse, OnTrue, Satisfies } from '.';

describe('OnFalse', () => {
  it('Returns children if condition prop is falsy', () => {
    expect(OnFalse({ condition: 0, children: 'true' })).toEqual(<>{'true'}</>);
    expect(OnFalse({ condition: 0n, children: 'true' })).toEqual(<>{'true'}</>);
    expect(OnFalse({ condition: '', children: 'true' })).toEqual(<>{'true'}</>);
    expect(OnFalse({ condition: 0.0, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(OnFalse({ condition: NaN, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(OnFalse({ condition: null, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(OnFalse({ condition: false, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(OnFalse({ condition: undefined, children: 'true' })).toEqual(
      <>{'true'}</>
    );
  });
  it('Returns null if condition prop is truthy', () => {
    expect(OnFalse({ condition: 1, children: 'true' })).toEqual(null);
    expect(OnFalse({ condition: -1, children: 'true' })).toEqual(null);
    expect(OnFalse({ condition: {}, children: 'true' })).toEqual(null);
    expect(OnFalse({ condition: [], children: 'true' })).toEqual(null);
    expect(OnFalse({ condition: ' ', children: 'true' })).toEqual(null);
    expect(OnFalse({ condition: true, children: 'true' })).toEqual(null);
    expect(OnFalse({ condition: /ReGeX/, children: 'true' })).toEqual(null);
    expect(OnFalse({ condition: Error(''), children: 'true' })).toEqual(null);
    expect(OnFalse({ condition: () => null, children: 'true' })).toEqual(null);
  });
});

describe('OnTrue', () => {
  it('Returns children if condition prop is truthy', () => {
    expect(OnTrue({ condition: 1, children: 'true' })).toEqual(<>{'true'}</>);
    expect(OnTrue({ condition: -1, children: 'true' })).toEqual(<>{'true'}</>);
    expect(OnTrue({ condition: {}, children: 'true' })).toEqual(<>{'true'}</>);
    expect(OnTrue({ condition: [], children: 'true' })).toEqual(<>{'true'}</>);
    expect(OnTrue({ condition: ' ', children: 'true' })).toEqual(<>{'true'}</>);
    expect(OnTrue({ condition: true, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(OnTrue({ condition: /ReGeX/, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(OnTrue({ condition: Error(''), children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(OnTrue({ condition: () => null, children: 'true' })).toEqual(
      <>{'true'}</>
    );
  });
  it('Returns null if condition prop is falsy', () => {
    expect(OnTrue({ condition: 0, children: 'true' })).toEqual(null);
    expect(OnTrue({ condition: 0n, children: 'true' })).toEqual(null);
    expect(OnTrue({ condition: '', children: 'true' })).toEqual(null);
    expect(OnTrue({ condition: 0.0, children: 'true' })).toEqual(null);
    expect(OnTrue({ condition: NaN, children: 'true' })).toEqual(null);
    expect(OnTrue({ condition: null, children: 'true' })).toEqual(null);
    expect(OnTrue({ condition: false, children: 'true' })).toEqual(null);
    expect(OnTrue({ condition: undefined, children: 'true' })).toEqual(null);
  });
});

describe('IfElse', () => {
  it("Doesn't render if no children are supplied", () => {
    expect(render(<IfElse />)('body').html()).toEqual('');
  });
  it('Renders all non-object children', () => {
    expect(render(<IfElse>foo</IfElse>)('body').html()).toEqual('foo');
    expect(render(<IfElse>{'bar'}</IfElse>)('body').html()).toEqual('bar');
    expect(render(<IfElse>{1}</IfElse>)('body').html()).toEqual('1');
    expect(render(<IfElse>{null}</IfElse>)('body').html()).toEqual('');
    expect(render(<IfElse>{undefined}</IfElse>)('body').html()).toEqual('');
  });
  it('Passes condition downstream correctly', () => {
    const expected = 'foobar';
    const actual = render(
      <IfElse condition={true}>
        <OnTrue>foo</OnTrue>
        bar
        <OnFalse>baz</OnFalse>
      </IfElse>
    );
    expect(actual('body').html()).toEqual(expected);
  });
  it('Renders multiple conditionals and values', () => {
    const expected = 'foobarbaz0';
    const actual = render(
      <IfElse>
        {undefined}
        <OnTrue>foo</OnTrue>
        <>{null}</>
        <OnFalse>foo</OnFalse>
        {false}
        <OnTrue>foo</OnTrue>
        <>{true}</>
        <OnFalse>bar</OnFalse>
        <OnTrue>foo</OnTrue>
        <>{''}</>
        <OnFalse>baz</OnFalse>
        {0}
      </IfElse>
    );
    expect(actual('body').html()).toEqual(expected);
  });
});
describe('Case', () => {
  it('Returns children if condition matches value', () => {
    expect(Case({ value: 0, condition: 0, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(Case({ value: 0n, condition: 0n, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(Case({ value: '', condition: '', children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(Case({ value: 0.0, condition: 0.0, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(Case({ value: null, condition: null, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(Case({ value: false, condition: false, children: 'true' })).toEqual(
      <>{'true'}</>
    );
    expect(
      Case({ value: undefined, condition: undefined, children: 'true' })
    ).toEqual(<>{'true'}</>);
  });
  it("Returns null if condition doesn't match value", () => {
    expect(Case({ value: 0, condition: 1, children: 'true' })).toEqual(null);
    expect(Case({ value: 1n, condition: 0n, children: 'true' })).toEqual(null);
    expect(Case({ value: 'a', condition: 'b', children: 'true' })).toEqual(
      null
    );
    expect(Case({ value: NaN, condition: NaN, children: 'true' })).toEqual(
      null
    );
    expect(Case({ value: -1.0, condition: 0.0, children: 'true' })).toEqual(
      null
    );
    expect(Case({ value: false, condition: true, children: 'true' })).toEqual(
      null
    );
    expect(
      Case({ value: undefined, condition: null, children: 'true' })
    ).toEqual(null);
    expect(
      Case({ value: null, condition: "nulln't", children: 'true' })
    ).toEqual(null);
    expect(
      Case({ value: { a: 1 }, condition: { a: 1 }, children: 'true' })
    ).toEqual(null);
    expect(
      Case({ value: ['foo', 1], condition: [1, 'foo'], children: 'true' })
    ).toEqual(null);
  });
});

describe('Satisfies', () => {
  it('Returns children if condition satisfies statement', () => {
    expect(
      Satisfies({ predicate: (x) => x === 0, condition: 0, children: 'true' })
    ).toEqual(<>{'true'}</>);
  });
  it('Returns null if condition does not satisfy statement', () => {
    expect(
      Satisfies({ predicate: (x) => x === 1, condition: 0, children: 'true' })
    ).toEqual(null);
    expect(
      Satisfies({ predicate: () => NaN, condition: 0, children: 'true' })
    ).toEqual(null);
  });
});
