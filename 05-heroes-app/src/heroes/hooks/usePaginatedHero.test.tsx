import type { PropsWithChildren } from "react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePaginatedHero } from "./usePaginatedHero";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

import type { HeroesResponse } from "../interfaces/heroes.response";


// Mock de la acción getHeroesByPageAction para controlar su comportamiento en las pruebas
vi.mock('../actions/get-heroes-by-page.action', () => ({
    getHeroesByPageAction: vi.fn()
}));

// Obtenemos la versión tipada del mock para poder definir su comportamiento en las pruebas
const mockGetHeroesByPageAction = vi.mocked(getHeroesByPageAction);

// Prepara un proveedor personalizado para envolver el hook con QueryClientProvider
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        }
    }
});

const tanStackCustomProvider = () => {
    return ({ children }: PropsWithChildren) => (
        <QueryClientProvider client={queryClient}>{ children }</QueryClientProvider>
    );
}

describe('usePaginatedHero', () => {

    // Limpiamos los mocks y el estado del QueryClient antes de cada prueba para evitar efectos secundarios entre pruebas
    beforeEach(() => {
        vi.clearAllMocks();
        queryClient.clear();
    });


    test('Should return the initial render state (isLoading)', () => {
        const page = 1;
        const limit = 6;
        const category = 'all';

        const { result } = renderHook(() => usePaginatedHero(page, limit, category), {
            wrapper: tanStackCustomProvider()
        });

        expect(result.current.isLoading).toBe(true);
        expect(result.current.isError).toBe(false);
        expect(result.current.data).toBe(undefined);
        expect(result.current.data).toBeUndefined();
    });
    
    test('Should return success state with data when API call successful', async () => {
        const mockPaginatedHeroData = {
            total: 20,
            pages: 4,
            heroes: []
        } as HeroesResponse;

        mockGetHeroesByPageAction.mockResolvedValue(mockPaginatedHeroData);

        const page = 1;
        const limit = 6;
        const category = 'all';

        const { result } = renderHook(() => usePaginatedHero(page, limit, category), {
            wrapper: tanStackCustomProvider()
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(false);
        expect(mockGetHeroesByPageAction).toHaveBeenCalled();
        expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(1, 6, 'all');
    });
    
});
