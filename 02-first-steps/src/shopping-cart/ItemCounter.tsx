interface Props {
    name: string;
    quantity?: number
};

export const ItemCounter = ({ name, quantity }: Props) => {
    const handleClick = () => {
        console.log(`+ ${ name }`);
    }

    return (
        <section style={{
            display: "flex",
            alignItems: "center",
            gap: 10
        }}>
            <span style={{
                width: 150
            }}>{ name }</span>
            <button
                onClick={handleClick}
            >+</button>
            <span>{ quantity }</span>
            <button
                onClick={() => {
                    console.log(`- ${ name }`);
                }}
            >-</button>
        </section>
    )
}
