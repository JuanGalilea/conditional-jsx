import { describe, it, expect } from "vitest";
import { OnFalse } from ".";

describe("OnFalse", ()=> {
    it("Returns children if condition prop is falsy", () => {
        expect(OnFalse({ condition: 0, children: true })).toEqual(true);
        expect(OnFalse({ condition: 0n, children: true })).toEqual(true);
        expect(OnFalse({ condition: "", children: true })).toEqual(true);
        expect(OnFalse({ condition: 0.0, children: true })).toEqual(true);
        expect(OnFalse({ condition: NaN, children: true })).toEqual(true);
        expect(OnFalse({ condition: null, children: true })).toEqual(true);
        expect(OnFalse({ condition: false, children: true })).toEqual(true);
        expect(OnFalse({ condition: undefined, children: true })).toEqual(true);
    });
    it("Returns null if condition prop is truthy", () => {
        expect(OnFalse({ condition: 1, children: true })).toEqual(null);
        expect(OnFalse({ condition: -1, children: true })).toEqual(null);
        expect(OnFalse({ condition: {}, children: true })).toEqual(null);
        expect(OnFalse({ condition: [], children: true })).toEqual(null);
        expect(OnFalse({ condition: " ", children: true })).toEqual(null);
        expect(OnFalse({ condition: true, children: true })).toEqual(null);
        expect(OnFalse({ condition: /ReGeX/, children: true })).toEqual(null);
        expect(OnFalse({ condition: Error(""), children: true })).toEqual(null);
        expect(OnFalse({ condition: () => null, children: true })).toEqual(null);
    });
})