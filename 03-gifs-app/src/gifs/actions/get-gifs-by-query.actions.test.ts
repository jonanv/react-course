import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.actions";


describe('getGifsByQuery', () => {
    test('Should return a list of gifs', async() => {
        const gifs = await getGifsByQuery('goku');
        const [gif1] = gifs;

        expect(gifs).length(10);
        expect(gif1).toStrictEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
                width: expect.any(Number),
                height: expect.any(Number)
            }
        );
    });
    
});
