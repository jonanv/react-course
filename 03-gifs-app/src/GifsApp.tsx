import { mockGifs } from "./mock-data/gifs.mocks";

// Components
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { GifsList } from "./gifs/GifsList";

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader 
                title={'Buscador de Gifs'}
                description={'Descubre y comparte el gif perfecto'}
            />

            {/* Search */}
            <SearchBar
                placeholder="Buscar gifs"
            />

            {/* Búsquedas previas */}
            <PreviousSearches 
                searches={[ 'Goku', 'Saitama', 'Elden Ring' ]}
            />

            {/* Gifs */}
            <GifsList
                gifs={mockGifs}
            />
        </>
    )
}
