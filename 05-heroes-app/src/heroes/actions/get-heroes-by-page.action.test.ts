import { beforeEach, describe, expect, test } from "vitest";

import { getHeroesByPageAction } from "./get-heroes-by-page.action";
import { heroApi } from "../api/hero.api";

// Mock
import AxiosMockAdapter from "axios-mock-adapter";


const BASE_URL = import.meta.env.VITE_API_URL;

describe('getHeroesByPageAction', () => {
    let heroesApiMock = new AxiosMockAdapter(heroApi);

    // Limpiar el historial de solicitudes antes de cada prueba
    beforeEach(() => {
        heroesApiMock.reset();
        heroesApiMock = new AxiosMockAdapter(heroApi);
    });

    test('Shold return default heroes', async () => {
        heroesApiMock.onGet('/').reply(200, {
            total: 10,
            pages: 2,
            heroes: [
                { image: '1.jpg', },
                { image: '2.jpg', },
            ]
        });

        const response = await getHeroesByPageAction(1);

        expect(response).toStrictEqual(
            {
                total: 10,
                pages: 2,
                heroes: [
                    { image: `${ BASE_URL }/images/1.jpg` },
                    { image: `${ BASE_URL }/images/2.jpg` }
                ]
            }
        );
    });

    test('Should return the correct heroes page is not a number', async () => {
        const mockData = {
            total: 10,
            page: 1,
            heroes: []
        };

        heroesApiMock.onGet('/').reply(200, mockData);

        await getHeroesByPageAction('abc' as unknown as number);

        const params = heroesApiMock.history.get[0].params;
        expect(params).toStrictEqual({ limit: 6, offset: 0, category: 'all' });
    });

    test('Should return the correct heroes page is string number', async () => {
        const mockData = {
            total: 10,
            page: 1,
            heroes: []
        };

        heroesApiMock.onGet('/').reply(200, mockData);

        await getHeroesByPageAction('5' as unknown as number);

        const params = heroesApiMock.history.get[0].params;
        expect(params).toStrictEqual({ limit: 6, offset: 24, category: 'all' });
    });

    test('Should call the api with correct params', async () => {
        const mockData = {
            total: 10,
            page: 1,
            heroes: []
        };

        heroesApiMock.onGet('/').reply(200, mockData);

        await getHeroesByPageAction(2, 10, 'heroes');

        const params = heroesApiMock.history.get[0].params;
        expect(params).toStrictEqual({ limit: 10, offset: 10, category: 'heroes' });
    });
    
});
