import { describe, expect, test } from "vitest";

import { getGifsByQuery } from "./get-gifs-by-query.actions";
import { giphySearchResponseMock } from "../../../tests/mocks/giphy.response.data";

// Mock
import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";


describe('getGifsByQuery', () => {
    const mock = new AxiosMockAdapter(giphyApi);
    
    // test('Should return a list of gifs', async() => {
    //     const gifs = await getGifsByQuery('goku');
    //     const [gif1] = gifs;

    //     expect(gifs).length(10);
    //     expect(gif1).toStrictEqual(
    //         {
    //             id: expect.any(String),
    //             title: expect.any(String),
    //             url: expect.any(String),
    //             width: expect.any(Number),
    //             height: expect.any(Number)
    //         }
    //     );
    // });
    
    test('Should return a list of gifs', async() => {
        mock.onGet('search').reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery('goku');

        expect(gifs.length).toBe(10);

        gifs.forEach((gif) => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        });
    });
    
});
