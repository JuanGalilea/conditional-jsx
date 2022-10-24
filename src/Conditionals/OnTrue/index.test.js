import { describe, it, expect } from "vitest";
import { OnTrue } from ".";

describe("OnTrue", ()=> {
    it("Returns children if condition prop is truthy", () => {
        expect(OnTrue({ condition: 1, children: true })).toEqual(true);
        expect(OnTrue({ condition: -1, children: true })).toEqual(true);
        expect(OnTrue({ condition: {}, children: true })).toEqual(true);
        expect(OnTrue({ condition: [], children: true })).toEqual(true);
        expect(OnTrue({ condition: " ", children: true })).toEqual(true);
        expect(OnTrue({ condition: true, children: true })).toEqual(true);
        expect(OnTrue({ condition: /ReGeX/, children: true })).toEqual(true);
        expect(OnTrue({ condition: Error(""), children: true })).toEqual(true);
        expect(OnTrue({ condition: () => null, children: true })).toEqual(true);
    });
    it("Returns null if condition prop is falsy", () => {
        expect(OnTrue({ condition: 0, children: true })).toEqual(null);
        expect(OnTrue({ condition: 0n, children: true })).toEqual(null);
        expect(OnTrue({ condition: "", children: true })).toEqual(null);
        expect(OnTrue({ condition: 0.0, children: true })).toEqual(null);
        expect(OnTrue({ condition: NaN, children: true })).toEqual(null);
        expect(OnTrue({ condition: null, children: true })).toEqual(null);
        expect(OnTrue({ condition: false, children: true })).toEqual(null);
        expect(OnTrue({ condition: undefined, children: true })).toEqual(null);
    });
})