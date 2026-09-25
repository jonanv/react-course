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

myRequest
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        document.body.append(imageElement);
    })
    .catch((err) => console.error(err));