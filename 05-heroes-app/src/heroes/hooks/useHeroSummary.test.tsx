import type { PropsWithChildren } from "react";
import { describe, expect, test, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useHeroSummary } from "./useHeroSummary";
import { getSummaryAction } from "../actions/get-summary.action";
import type { SummaryInformationResponse } from "../interfaces/summary-information.response";


// Mock de la acción getSummaryAction para controlar su comportamiento en las pruebas
vi.mock('../actions/get-summary.action', () => ({
    getSummaryAction: vi.fn()
}));

// Obtenemos la versión tipada del mock para poder definir su comportamiento en las pruebas
const mockGetSummaryAction = vi.mocked(getSummaryAction);

// Prepara un proveedor personalizado para envolver el hook con QueryClientProvider
const tanStackCustomProvider = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            }
        }
    })

    return ({ children }: PropsWithChildren) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

describe('useHeroSummary', () => {
    test('Should return the initial state (isLoading)', () => {
        const { result } = renderHook(() => useHeroSummary(), {
            wrapper: tanStackCustomProvider()
        });

        expect(result.current.isLoading).toBe(true);
        expect(result.current.isError).toBe(false);
        expect(result.current.data).toBe(undefined);
        expect(result.current.data).toBeUndefined();
    });

    test('Should return success state with data when API call successful', async () => {
        const mockSummaryData = {
            totalHeroes: 25,
            strongestHero: {
                id: '1',
                name: 'Clark Kent',
            },
            smartestHero: {
                id: '2',
                name: 'Bruce Wayne',
            },
            heroCount: 18,
            villainCount: 7
        } as SummaryInformationResponse;

        mockGetSummaryAction.mockResolvedValue(mockSummaryData);

        const { result } = renderHook(() => useHeroSummary(), {
            wrapper: tanStackCustomProvider()
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(false);
        expect(mockGetSummaryAction).toHaveBeenCalled();
    });

    test('Should return error state when API call fails', async () => {
        const mockErrorData = new Error('Failed to fetch summary');

        mockGetSummaryAction.mockRejectedValue(mockErrorData);

        const { result } = renderHook(() => useHeroSummary(), {
            wrapper: tanStackCustomProvider()
        });

        await waitFor(() => {
            expect(result.current.isError).toBe(true);
        });
        
        expect(result.current.error).toBeDefined();
        expect(result.current.isLoading).toBe(false);
        expect(mockGetSummaryAction).toHaveBeenCalled();
        expect(result.current.error?.message).toBe('Failed to fetch summary');
    });
});
