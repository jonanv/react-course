import { useState } from "react";

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

    const handleSearch = (query: string) => {
        const term = query.trim().toLowerCase();
        if (!term) return;
        if (previousTerms.includes(term)) return;
        setPreviousTerms([term, ...previousTerms].slice(0, 8))
        console.log({ term });
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
