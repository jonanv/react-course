import { useRef, useState } from "react";

// Imports
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

// Interfaces
import type { Gif } from "../interfaces/gif.interface";


// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermsClicked = async(query: string) => {
        if (gifsCache.current[query]) {
            setGifs(gifsCache.current[query]);
            return;
        }

        const gifs = await getGifsByQuery(query);
        // console.log(gifs);
        setGifs(gifs);
    }

    const handleSearch = async(query: string = '') => {
        query = query.trim().toLowerCase();
        if (!query) return;
        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 8))
        // console.log({ query });

        const gifs = await getGifsByQuery(query);
        // console.log(gifs);
        setGifs(gifs);

        // Llenar el gifsCache
        gifsCache.current[query] = gifs;
    }

    return {
        // Values
        gifs,
        previousTerms,

        // Methods / Actions
        handleTermsClicked,
        handleSearch
    }
}
