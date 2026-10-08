import { useState } from "react";

// Imports
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";

// Mocks
import { mockGifs } from "./mock-data/gifs.mocks";

// Components
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { GifsList } from "./gifs/GifsList";

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermsClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async(query: string = '') => {
        query = query.trim().toLowerCase();
        if (!query) return;
        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 8))
        // console.log({ query });

        await getGifsByQuery(query);
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
                gifs={mockGifs}
            />
        </>
    )
}
