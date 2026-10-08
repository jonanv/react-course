import { useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;

    onQuerySearch: (search: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuerySearch }: Props) => {

    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onQuerySearch(query);
        // setQuery('');
    };

    const handleSearchKeyEnter = (event: KeyboardEvent) => {
        if (event.key !== 'Enter') return;
        onQuerySearch(query);
        // setQuery('');
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder={placeholder}
                value={query}
                onChange={ (event) => setQuery(event.target.value) }
                onKeyDown={handleSearchKeyEnter}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
