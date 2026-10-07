export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <div className="content-center">
                <h1>Buscardor de Gifs</h1>
                <p>Descubre y comparte el Gif perfecto</p>
            </div>

            {/* Search */}
            <div className="search-container">
                <input type="text" placeholder="Buscar gifs" />
                <button>Buscar</button>
            </div>

            {/* Búsquedas previas */}
            <div className="previous-searches">
                <h2>Búsquedas previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Elden Ring</li>
                </ul>
            </div>

            {/* Gifs */}
            <div className="gifs-container">
                
            </div>
        </>
    )
}
