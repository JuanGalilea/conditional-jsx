import React from "react";
import { render } from "../../lib/testUtils";
import { describe, it, expect } from "vitest";
import { Switch, Case, Satisfies } from ".";

const emptyReturn = "<html><head></head><body></body></html>";
describe("Case", () => {
    it("Returns children if condition matches value", () => {
        expect(Case({ value: 0, condition: 0, children: true })).toEqual(true);
        expect(Case({ value: 0n, condition: 0n, children: true })).toEqual(true);
        expect(Case({ value: "", condition: "", children: true })).toEqual(true);
        expect(Case({ value: 0.0, condition: 0.0, children: true })).toEqual(true);
        expect(Case({ value: null, condition: null, children: true })).toEqual(true);
        expect(Case({ value: false, condition: false, children: true })).toEqual(true);
        expect(Case({ value: undefined, condition: undefined, children: true })).toEqual(true);
    });
    it("Returns null if condition doesn't match value", () => {
        expect(Case({ value: 0, condition: 1, children: true })).toEqual(null);
        expect(Case({ value: 1n, condition: 0n, children: true })).toEqual(null);
        expect(Case({ value: "a", condition: "b", children: true })).toEqual(null);
        expect(Case({ value: NaN, condition: NaN, children: true })).toEqual(null);
        expect(Case({ value: -1.0, condition: 0.0, children: true })).toEqual(null);
        expect(Case({ value: false, condition: true, children: true })).toEqual(null);
        expect(Case({ value: undefined, condition: null, children: true })).toEqual(null);
        expect(Case({ value: null, condition: "nulln't", children: true })).toEqual(null);
        expect(Case({ value: { a: 1 }, condition: { a: 1 }, children: true })).toEqual(null);
        expect(Case({ value: ["foo", 1], condition: [1, "foo"], children: true })).toEqual(null);
    });
})

describe("Satisfies", () => {
    it("Returns children if condition satisfies statement", () => {
        expect(Satisfies({ predicate: x => x === 0, condition: 0, children: true })).toEqual(true);
    })
    it("Returns null if condition does not satisfy statement", () => {
        expect(Satisfies({ predicate: x => x === 1, condition: 0, children: true })).toEqual(null);
        expect(Satisfies({ predicate: () => NaN, condition: 0, children: true })).toEqual(null);
    })
});

