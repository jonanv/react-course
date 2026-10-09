// Imports
import { useGifs } from "./gifs/hooks/useGifs";

// Components
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";


export const GifsApp = () => {

    const { gifs, previousTerms, handleTermsClicked, handleSearch } = useGifs();

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
