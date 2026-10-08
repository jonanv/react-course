import { mockGifs, type Gif } from "./mock-data/gifs.mocks";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/PreviousSearches";

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
                buttonName="Buscar"
                placeholder="Buscar gifs"
            />

            {/* Búsquedas previas */}
            <PreviousSearches 
                title="Búsquedas previas"
                listPrevious={[ 'Goku', 'Saitama', 'Elden Ring' ]}
            />

            {/* Gifs */}
            <div className="gifs-container">
                {
                    mockGifs.map((gif: Gif) => (
                        <div
                            key={ gif.id }
                            className="gif-card">
                            <img src={ gif.url } alt={ gif.title } />
                            <h3>{ gif.title }</h3>
                            <p>
                                { gif.width } x { gif.height } (1.5mb)
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
