import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.actions";


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
    
    test('Should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermsClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);
        expect(result.current.gifs).not.toBeNull();

        // Espia que el getGifsByQuery sea llamado, para el cache, no debe ser llamado
        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockRejectedValue(new Error('Esto es un error'));

        await act(async () => {
            await result.current.handleTermsClicked('goku');
        });
        
        expect(result.current.gifs.length).toBe(10);
        expect(result.current.gifs).not.toBeNull();
    });

    test('Should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());

        // Espia que el getGifsByQuery sea llamado, debe ser llamado
        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockResolvedValue([]);

        await act(async () => { await result.current.handleSearch('goku'); });
        await act(async () => { await result.current.handleSearch('naruto'); });
        await act(async () => { await result.current.handleSearch('sasuke'); });
        await act(async () => { await result.current.handleSearch('itachi'); });
        await act(async () => { await result.current.handleSearch('hashirama'); });
        await act(async () => { await result.current.handleSearch('vegeta'); });
        await act(async () => { await result.current.handleSearch('seiya'); });
        await act(async () => { await result.current.handleSearch('sean'); });
        await act(async () => { await result.current.handleSearch('sakura'); });
        await act(async () => { await result.current.handleSearch('gara'); });
        await act(async () => { await result.current.handleSearch('madara'); });

        expect(result.current.previousTerms.length).toBe(8);
        expect(result.current.previousTerms).toStrictEqual(
            [
                'madara',
                'gara',
                'sakura',
                'sean',
                'seiya',
                'vegeta',
                'hashirama',
                'itachi'
            ]
        );
    });
    
});
