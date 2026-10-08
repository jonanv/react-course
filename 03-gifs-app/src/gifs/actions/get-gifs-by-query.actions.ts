import axios from "axios";
import type { GiphyGif, GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";



export const getGifsByQuery = async(query: string): Promise<Gif[]> => {
    // AXIOS
    const response = await axios.get<GiphyResponse>(BASE_URL, {
        params: {
            q: query,
            limit: 10,
            lang: 'es',
            api_key: API_KEY
        }
    });
    // console.log(response.data.data);

    return response.data.data.map((gif: GiphyGif) => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            width: Number(gif.images.original.width),
            height: Number(gif.images.original.height)
        }
    ));
    

    // FETCH
    // const params = new URLSearchParams({
    //     api_key: API_KEY,
    //     q: query,
    //     limit: '10',
    //     lang: 'es',
    // });

    // const response = await fetch(`${BASE_URL}?${params}`);
    // const { data } = (await response.json()) as GiphyResponse;
    // // console.log(data);

    // return data.map((gif: GiphyGif) => (
    //     {
    //         id: gif.id,
    //         title: gif.title,
    //         url: gif.images.original.url,
    //         width: Number(gif.images.original.width),
    //         height: Number(gif.images.original.height)
    //     }
    // ));
}