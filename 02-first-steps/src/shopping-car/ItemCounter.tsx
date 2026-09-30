interface Props {
    name: string;
}

export const ItemCounter = ({ name }: Props) => {
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
            <span>10</span>
            <button>-</button>
        </section>
    )
}
