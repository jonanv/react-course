interface Props {
    name: string;
    quantity?: number
};

export const ItemCounter = ({ name, quantity }: Props) => {
    return (
        <section style={{
            display: "flex",
            alignItems: "center",
            gap: 10
        }}>
            <span style={{
                width: 150
            }}>{ name }</span>
            <button>+</button>
            <span>{ quantity }</span>
            <button>-</button>
        </section>
    )
}
