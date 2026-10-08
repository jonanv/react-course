import { useState } from "react";

// Imports
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";

// Interfaces
import type { Gif } from "./gifs/interfaces/gif.interface";

// Components
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleTermsClicked = (term: string) => {
        console.log({ term });
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
    }

    return (
        <>
            {/* Header */}
            <CustomHeader 
                title={'Buscador de Gifs'}
                description={'Descubre y comparte el gif perfecto'}
            />

            {/* Search */}
            {
                true && (
                    <SearchBar
                        placeholder="Buscar gifs"
                        onQuery={handleSearch}
                    />
                )
            }
            

            {/* Búsquedas previas */}
            <PreviousSearches 
                searches={previousTerms}
                onLabelClicked={handleTermsClicked}
            />

            {/* Gifs */}
            <GifsList
                gifs={gifs}
            />
        </>
    )
}
