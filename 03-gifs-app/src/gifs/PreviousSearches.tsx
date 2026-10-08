interface Props {
    title: string;
    listPrevious: string[];
}

export const PreviousSearches = ({ title, listPrevious }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{ title }</h2>
            <ul className="previous-searches-list">
                {
                    listPrevious.map((element: string) => (
                        <li key={element}>{ element }</li>
                    ))
                }
            </ul>
        </div>
    )
}
