interface Props {
    searches: string[];
}

    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((term: string) => (
                        <li key={term}>{ term }</li>
                    ))
                }
            </ul>
        </div>
    )
}
