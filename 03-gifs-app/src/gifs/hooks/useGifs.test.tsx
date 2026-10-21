import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { useGifs } from "./useGifs";


describe('useGifs', () => {
    test('Should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());

        expect(result.current.gifs).toBeDefined();
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousTerms).toBeDefined();
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleTermsClicked).toBeDefined();
        expect(result.current.handleSearch).toBeDefined();
    });
    
    test('Should return a list of gifs when handleSearch', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('goku');
        });

        expect(result.current.gifs.length).toBe(10);
        expect(result.current.gifs).not.toBeNull();
    });

    test('Should return a list of gifs when handleTermsClicked', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermsClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);
        expect(result.current.gifs).not.toBeNull();
    });
    
});
