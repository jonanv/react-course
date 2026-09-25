import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'DDhh1usvhpiJyvSWpQ8e9tJOyoO7AYdp'
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }&tag=&rating=g`;

const createImageInsideDOM = (imageUrl: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    document.body.append(imageElement);
}

const getRandomGiphyUrl = async(): Promise<string> => {
    const response = await fetch(URL);
    const { data } = (await response.json()) as GiphyRandomResponse;
    return data.images.original.url;
}

getRandomGiphyUrl().then((url) => createImageInsideDOM(url));