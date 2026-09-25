import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'DDhh1usvhpiJyvSWpQ8e9tJOyoO7AYdp'
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }&tag=&rating=g`;

const myRequest = fetch(URL);

// myRequest
//     .then((response) => {
//         response.json().then((data) => {
//             console.log(data)
//         });
//     })
//     .catch((err) => console.error(err));

const createImageInsideDOM = (imageUrl: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    document.body.append(imageElement);
}

myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        console.log(imageUrl);
        createImageInsideDOM(imageUrl);
    })
    .catch((err) => console.error(err));