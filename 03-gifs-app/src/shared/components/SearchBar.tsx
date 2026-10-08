interface Props {
    buttonName: string;
    placeholder: string;
}

export const SearchBar = ({ buttonName, placeholder }: Props) => {
    return (
        <div className="search-container">
            <input type="text" placeholder={ placeholder } />
            <button>{ buttonName }</button>
        </div>
    )
}
