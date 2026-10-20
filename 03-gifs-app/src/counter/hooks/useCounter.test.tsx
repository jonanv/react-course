import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useCounter } from "./useCounter";


describe('useCounter', () => {
    test('Should inicializate with default value of 10', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
    });

    test('Should inicializate with value of 20', () => {
        const initialValue = 20;
        const { result } = renderHook(() => useCounter(initialValue));
        expect(result.current.counter).toBe(initialValue);
    });

    test('Should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleAdd()
        });
        expect(result.current.counter).toBe(11);
    });
    
});
