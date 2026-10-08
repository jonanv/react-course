import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;

    onQuery: (search: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {

    const [query, setQuery] = useState('');

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(setTimeoutId);
        };
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
        // setQuery('');
    };

    const handleSearchKeyEnter = (event: KeyboardEvent) => {
        if (event.key !== 'Enter') return;
        handleSearch();
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
